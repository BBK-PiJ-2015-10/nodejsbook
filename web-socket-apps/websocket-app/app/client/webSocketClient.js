import { WebSocket } from 'ws';



const wsUri = 'ws://localhost:8181';

const my = new WebSocket(wsUri);


console.log('Will send something');

my.onopen = () => {
    console.log('Connection established');
    my.send(`{"name":"alex", "msg":"palacios"}`);
    console.log('Sent something');
};

my.onmessage= (msg) => {
    const data = String(msg.data);
    const jsonData = JSON.parse(String(msg.data));
    console.log(`Got an answer ${data} with ${jsonData}`);
}



