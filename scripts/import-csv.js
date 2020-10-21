const fs = require('fs');
const parse = require('csv-parse');
const r = require('rethinkdb');

(async () => {
	const conn = await require('../lib/connection');

	const parser = parse({
	  delimiter: ','
	})

	parser.on('readable', async () => {
		let record;

		let i = 0;

		while(record = parser.read()) {
			console.log(i++);
			const [ tempEmail, satelliteAddress, apiKey ] = record;

			const re = /\S+@\S+\.\S+/;


			if(re.test(tempEmail)) {
				await r.table('accounts').insert({
					tempEmail,
					satelliteAddress,
					apiKey
				}).run(conn);
			}
		}

		process.exit(0);
	})

	fs.createReadStream(`${__dirname}/../wormhole-users.csv`).pipe(parser);

})();
