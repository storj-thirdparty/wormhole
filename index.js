const fs = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const r = require('rethinkdb');

(async () => {

	const conn = await r.connect({
		db: 'wormhole'
	});

	const app = new Koa();

	const router = new Router();

	router.get('/keys', ctx => {
		ctx.redirect('/');
	});

	router.post('/api/sign-up', async ctx => {
		const { email } = ctx.request.body;

		/*

		await conn.table('accounts').insert({
			email
		});
		*/

		ctx.body = "";
	});

	app.use(require('koa-static')('dist'));

	app
		.use(bodyParser())
		.use(router.routes())
		.use(router.allowedMethods());

	app.listen(3000);

})();
