const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const r = require('rethinkdb');

async function decodeSatelliteCSV(conn, file, sattelite) {
	const records = parse(fs.readFileSync(file), {
		columns: true,
		skip_empty_lines: true
	});

	records.sort((a, b) => {
		return +a.current_bytes_stored > +b.current_bytes_stored ? -1 : 1
	});

	console.log(records.slice(0, 5));
}

(async () => {
	const conn = null; // await require('../lib/connection');

	decodeSatelliteCSV(conn, process.argv[2]);
})();
