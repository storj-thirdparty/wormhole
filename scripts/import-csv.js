const fs = require('fs');
const parse = require('csv-parse');
const r = require('rethinkdb');

async function decodeSatelliteCSV(conn, file, sattelite) {
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

			if(!re.test(tempEmail)) {
				continue;
			}

			let cursor = await r.table('accounts2')
				.filter({
					tempEmail,
					satelliteAddress
				})
				.run(conn);

			const accounts = await cursor.toArray();

			if(accounts.length > 0) {
				continue;
			}

			await r.table('accounts2')
				.insert({
					tempEmail,
					satelliteAddress,
					apiKey
				}).run(conn);
		}

		process.exit(0);
	})

	fs.createReadStream(file).pipe(parser);
}

(async () => {
	const conn = await require('../lib/connection');

	decodeSatelliteCSV(conn, process.argv[2]);
})();
