const parse = require('csv-parse');
const r = require('rethinkdb');

(async () => {
	const conn = await require('../lib/connection');

	const cursor = await r.table('accounts')
		.filter(r.row('userEmail'))
		.run(conn);

	console.log(await cursor.toArray());

})();
