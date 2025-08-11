import {createSocket} from 'dgram';

let udpSocketType = 'udp6';

let count = 0;

let udpSocket = createSocket(udpSocketType);

udpSocket.on('message', (data) => {
    count++;
    console.log(`${count}: ${data.toString()}`)

    if (count >= 100) {
        udpSocket.close();
    }
});


udpSocket.on('close', () => {
    console.log(`Received ${count} datagrams already. Closed socket`);
})

udpSocket.bind(8080, () => {
    console.log(`Started server upd socket on port 8080`);
})