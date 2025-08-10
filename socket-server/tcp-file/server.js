import {createServer} from 'net';
import {writeFile} from 'fs';

let port = 8080;
let host = '127.0.0.1'

createServer((conn) => {
    let file = '';
    conn.on('readable', () => {
        console.log(`Got a readable at ${new Date()}`)
        file += conn.read();
        console.log(`Processed a readable at ${new Date()}`)
    });
    conn.on('end', () => {
        const input = Buffer.from(file, 'base64');
        writeFile('dest.png', input, () => {
            console.log(`Done writing at ${new Date()}`);
        });
    });
}).listen(port, host, () => {
    console.log(`Server started on ${host}:${port}`)
})