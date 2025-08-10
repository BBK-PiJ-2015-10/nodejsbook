import {createServer} from 'net';

let port = 8080;
let host = '127.0.0.1';

createServer((conn) => {
    conn.on('readable', () => {
        const data = conn.read();
        if (Buffer.isBuffer(data)) {
            console.log(`Server received `+ data.toString());
        }
    });
}).listen(port,host,() => {
    console.log(`Server listening on ${host}:${port}`);
});