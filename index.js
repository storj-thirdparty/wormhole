const axios = require('axios');
const fs = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const r = require('rethinkdb');

(async () => {

	const conn = await require('./lib/connection');

	const app = new Koa();

	const router = new Router();

	router.get('/keys', ctx => {
		ctx.redirect('/');
	});

	router.post('/api/sign-up', async ctx => {
		const { email, satelliteAddress, password } = ctx.request.body;

		const cursor = await r.table('accounts2')
			.orderBy('tempEmail')
			.filter({
				satelliteAddress
			})
			.filter(function (row) {
				return row.hasFields({ userEmail: true }).not()
			})
			.run(conn);

		const [account] = await cursor.toArray();

		await r.table("accounts2")
			.filter({
				tempEmail: account.tempEmail,
				satelliteAddress
			})
			.update({
				userEmail: email,
				signupTime: new Date()
			})
			.run(conn);

		let token = (await axios.post(`https://${satelliteAddress}/api/v0/auth/token`, {
			email: account.tempEmail,
			password: account.password
		})).data;

		console.log({ token });

		try {
			await axios.post(`https://${satelliteAddress}/api/v0/auth/account/change-email`, {
				newEmail: email
			}, {
				headers: {
	                Cookie: `_tokenKey=${token};`
				}
			});
		} catch(err) {
			if(err.response.status === 409) {
				ctx.body = {
					error: 'Email already in use'
				};
			}

			return;
		}

		console.log('changed email');

		token = (await axios.post(`https://${satelliteAddress}/api/v0/auth/token`, {
			email,
			password: account.password
		})).data;

		console.log('reauthenticated');

		console.log({
			email,

			currentPassword: account.password,
			newPassword: password
		});

		await axios.post(`https://${satelliteAddress}/api/v0/auth/account/change-password`, {
			password: account.password,
			newPassword: password
		}, {
			headers: {
                Cookie: `_tokenKey=${token};`
			}
		});

		await r.table("accounts2")
			.filter({
				tempEmail: account.tempEmail,
				satelliteAddress
			})
			.update({
				flipped: true
			})
			.run(conn);

		ctx.body = {
			apiKey: account.apiKey,
			satelliteAddress: account.satelliteAddress
		}
	});

	app.use(require('koa-static')('dist'));

	app
		.use(bodyParser())
		.use(router.routes())
		.use(router.allowedMethods());

	app.listen(3000);

	console.log("Wormhole has started :)");

})();
