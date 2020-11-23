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

		while (record = parser.read()) {
			console.log(i++);
			const [
				tempEmail,
				satelliteAddress,
				fullName,
				password,
				userId,
				couponId,
				projectId,
				apiKey
			] = record;

			const re = /\S+@\S+\.\S+/;

			if (!re.test(tempEmail)) {
				continue;
			}

			await r.table('accounts2')
				.insert({
					tempEmail,
					satelliteAddress,
					password,
					userId,
					projectId,
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
