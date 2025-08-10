import {createServer} from 'net';
import {chmod, existsSync, unlinkSync} from 'fs';

const server = createServer((connection) => {
        connection.on('readable', (data) => {
            console.log('WOOF WOOF');
            let message = connection.read().toString();
            console.log(`Data is ${data} message is ${message}`);
        });
        connection.on('end', () => {
            console.log(`Connection ended data is ${data}`);
        });
    }
);

let fileName = '/tmp/nodejs.sock';

// if (existsSync(fileName)) {
//     unlinkSync(fileName);
// }

server.listen(fileName, () => {
    chmod(fileName, 0o700, () => {
        console.log(`Connection listening on ${fileName}`)
    })
});