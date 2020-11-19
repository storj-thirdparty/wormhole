const axios = require('axios');

const [ , , satelliteAddress, email, password, newEmail ] = process.argv;

(async () => {
	const token = (await axios.post(`https://${satelliteAddress}/api/v0/auth/token`, {
		email,
		password
	})).data;

	await axios.post(`https://${satelliteAddress}/api/v0/auth/account/change-email`, {
		newEmail
	}, {
		headers: {
			Cookie: `_tokenKey=${token};`
		}
	});
})();
