import {createSocket} from 'dgram';

let updSocketType = 'udp6';
const port = 8080;
const host = 'localhost';

const clientUpdSocket = createSocket(updSocketType);


let count = 0;

const sendData = () => {

    let payload = Math.ceil(Math.random() * 100);

    const message = Buffer.from(payload.toString());

    clientUpdSocket.send(
        message,
        host,
        message.length,
        port,
        (err, bytes) => {
            count += 1;
            if (count > 100) {
                console.log(`Client has sent ${count-1}`)
                clientUpdSocket.close();
                clearInterval(interval);
            }
        }
    );
};

const interval = setInterval(sendData, 10);