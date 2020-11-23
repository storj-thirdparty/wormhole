const stringifyCb = require('csv-stringify');
const util = require('util');
const r = require('rethinkdb');

const stringify = util.promisify(stringifyCb);

(async () => {
	const conn = await require('../lib/connection');

	const cursor = await r.table('accounts2')
		.orderBy('signupTime')
		.filter(r.row('userEmail'))
		.pluck('satelliteAddress', 'tempEmail', 'userEmail')
		.run(conn);

	const arr = await cursor.toArray();



	process.stdout.write(await stringify(arr));

	process.exit(0);

})();
