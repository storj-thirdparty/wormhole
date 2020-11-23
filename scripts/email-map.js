const stringifyCb = require('csv-stringify');
const util = require('util');
const r = require('rethinkdb');

const stringify = util.promisify(stringifyCb);

(async () => {
	const conn = await require('../lib/connection');

	const cursor = await r.table('accounts2')
		.orderBy('signupTime')
		.filter(r.row('userEmail'))
		.run(conn);

	const arr = await cursor.toArray();

	console.log(await stringify(arr));

	process.exit(0);

})();
