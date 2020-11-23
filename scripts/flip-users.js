const fs = require('fs');
const axios = require('axios');
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

        for(const record of records) {
                const cursor = await r.db('wormhole').table('accounts2').filter({
                        tempEmail: record.user_email,
                        satelliteAddress: record.satellite + '.tardigrade.io'
                }).run(conn);

                const [user] = await cursor.toArray();
                //      console.log(record, user);

                if(user.flipped === true) {
                        continue;
                }

                try {
                        const token = (await axios.post(`https://${user.satelliteAddress}/api/v0/auth/token`, {
                                email: user.tempEmail,
                                password: user.password
                        })).data;

                        await axios.post(`https://${user.satelliteAddress}/api/v0/auth/account/change-email`, {
                                        newEmail: user.userEmail
                                }, {
                                headers: {
                                        Cookie: `_tokenKey=${token};`
                                }
                        });

                        await r.table('accounts2')
                                .filter({
                                        tempEmail: user.tempEmail,
                                        satelliteAddress: user.satelliteAddress
                                })
                                .update({
                                        flipped: true
                                }).run(conn);

                        console.log('flipped', user.userEmail);


                } catch(err) {
                        console.log(err.response.data);

                        if(err.response.data.trim() === "Too Many Requests") {
                                console.log('Recieved Too Many Requests, waiting two hours');
                                await new Promise(resolve => setTimeout(resolve, 2 * 60 * 60 * 1000));
                        }

                        console.log('failed to flip', user.userEmail);
                }

                await new Promise(resolve => setTimeout(resolve, 2000));
        }
}

(async () => {
        const conn = await require('../lib/connection');

        decodeSatelliteCSV(conn, process.argv[2]);
})().catch(e => console.log(e));
