(async () => {

	const r = require('rethinkdb');

	const conn = await r.connect();

	await r.dbCreate('wormhole').run(conn);
	await r.db('wormhole').tableCreate('accounts2').run(conn);

	process.exit(0);

})();
