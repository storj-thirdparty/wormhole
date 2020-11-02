const parse = require('csv-parse');
const r = require('rethinkdb');

(async () => {
	const conn = await require('../lib/connection');

	const cursor = await r.table('accounts2')
		.filter(r.row('userEmail'))
		.run(conn);

	const arr = await cursor.toArray();

	for(const user of arr) {
		console.log(user);
	}

	console.log('Found', arr.length, 'accounts');

})();
