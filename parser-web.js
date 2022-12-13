import {Pool, PoolClient} from "pg";
import * as pgCopyStreams from "pg-copy-streams";
import https from "https";
// @ts-ignore
import XmlStream from 'xml-stream';

const startTime = process.hrtime();

const pool: Pool = new Pool({
    user: 'postgres',
    password: 'pass',
    host: 'localhost',
    database: 'parser',
    port: 5432
});

pool.connect((err: Error, client: PoolClient, release: (release?: any) => void) => {
    const query = "COPY currency_rate (symbol, rate, info_date) FROM STDIN WITH DELIMITER ','";
    const dbStream = client.query(pgCopyStreams.from(query))
        .on('error', error => {
            release();
            console.log(error);
        })
        .on('finish', () => {
            release();
            const endTime = process.hrtime(startTime);
            console.log('Data transfer to database is done!');
            console.log('Execution time: %ds %dms', endTime[0], endTime[1] / 1000000)
        });

    const xmlUrl = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist.xml';
    https.get(xmlUrl, response => {
        const xml = new XmlStream(response);
        xml.collect('Cube');
        xml.on('updateElement: gesmes:Envelope > Cube > Cube', (tag: any) => {
            tag.Cube.map((subTag: any) => `${subTag.$.currency},${subTag.$.rate},${tag.$.time}\n`)
                .forEach((item: any) => dbStream.write(item));
        });
        xml.on('end', () => dbStream.end());
        xml.on('error', (error: Error) => console.log(error));
    }).on('error', (error) => console.log(error));
});