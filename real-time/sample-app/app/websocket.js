import {WebSocketServer} from 'ws';

export default function init(app) {

    const wss = new WebSocketServer({port: 8181});

    console.log('Initialized websocket on port:8181')

    const connections = [];

    wss.on('connection', (ws) => {
        console.log(`Someone is connecting`);

        if (ws.readyState === 1){
            console.log('Received connection is ready');
        } else {
            console.info('Received connection is not ready');
        }

        connections.push(ws);

        ws.on('message', (msg) => {
            console.log(`Websocket server got a message: ${msg}`);
            connections.forEach((con) => {
                if (con.readyState === 1) { // Check if connection is open
                    console.log(`Connection is open ${con} sending message : ${msg}`);
                    con.send(msg);
                } else {
                    console.log(`Connection is closed ${con} not sending message : ${msg}`);
                    //con.send(msg);
                }
            });
        });

    });

}

