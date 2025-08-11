import {createSocket} from 'dgram';


let port = 8080;
let host = 'locahost';
let udpSocketType = 'udp6'

const message = Buffer.from('yasser alejandro palacios');

const socket = createSocket(udpSocketType);

socket.send(
    message,
    host,
    message.length,
    port,
    (err, bytes) => {
        console.log(`Triggerred with ${bytes}`)
        socket.close();
    }
);