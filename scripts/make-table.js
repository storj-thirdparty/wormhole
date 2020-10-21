(async () => {

	const r = require('rethinkdb');
	const conn = await require('../lib/connection');

	await r.tableCreate('accounts', {
		primaryKey: 'tempEmail'
	}).run(conn);

	process.exit(0);

})();
