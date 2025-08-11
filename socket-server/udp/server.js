import {createSocket} from 'dgram';

let udpSocketType = 'udp6'

const socket = createSocket(udpSocketType);

socket.on('message', (data) => {
    console.log(`Server received ${data}`)
});

socket.bind(8080, () => console.log('Server websocket started on port:8080')
);
