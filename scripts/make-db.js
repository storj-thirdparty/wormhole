(async () => {

	const r = require('rethinkdb');

	const conn = await r.connect();

	await r.dbCreate('wormhole').run(conn);

	await r.tableCreate('accounts', {
		primaryKey: 'tempEmail'
	}).run(conn);

	process.exit(0);

})();
