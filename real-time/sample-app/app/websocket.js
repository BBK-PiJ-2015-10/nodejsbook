import {WebSocketServer} from 'ws';

export default function init(app) {
    const wss = new WebSocketServer({port: 8181});

    const connections = [];

    wss.on('connection', (ws) => {
        // pushes each connection to the array of connections
        connections.push(ws);

        connection.on('message', (message) => {
            connections.forEach((connection) => {
                connection.send && connection.send(message);
            });
        });
    });
}

