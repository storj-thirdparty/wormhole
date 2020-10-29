const parse = require('csv-parse');
const r = require('rethinkdb');

(async () => {
	const conn = await require('../lib/connection');

	const cursor = await r.table('accounts')
		.filter(r.row('userEmail'))
		.run(conn);

	const arr = await cursor.toArray();

	console.log(arr);

	console.log('Found', arr.length, 'accounts');

})();
