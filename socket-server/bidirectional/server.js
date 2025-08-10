import {createServer} from 'net';

const fileNameSocket = '/tmp/nodejs.sock';

const server = createServer((conn) => {
    let sum = 0;
    let count = 0;
    conn.on('readable', (data) => {
        sum += parseInt(conn.read().toString(), 10);
        count += 1;
        if (count >= 10) {
            count = 0;
            console.log(`Sending ${sum.toString()}`)
            conn.write(sum.toString());
        }
    });
});

server.listen(fileNameSocket, () => {
    console.log(`server up on ${fileNameSocket}`)
})
