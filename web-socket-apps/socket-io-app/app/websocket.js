import {WebSocketServer} from 'ws';

export default function init(app) {

    const wss = new WebSocketServer({port: 8181});

    console.log('Initialized websocket on port:8181')

    //const connections = [];
    const connections = {};

    wss.on('connection', (ws) => {
        console.log(`Someone is connecting`);

        if (ws.readyState === 1) {
            console.log('Received connection is ready');
        } else {
            console.info('Received connection is not ready');
        }

        ws.on('message', (msg) => {
            console.log(`Websocket server got a message: ${msg}`);

            const data = JSON.parse(msg);
            console.log(`Websocket decoded json: ${data}`);
            let msgToSend;

            switch (data.type) {
                case 'join':
                    console.info(`I am on join with data.name ${data.name}`)
                    connections[data.name] = ws;
                    msgToSend = JSON.stringify({
                        type: 'join',
                        names: Object.keys(connections)
                    });
                    console.info(`I am on join with msgToSend ${msgToSend}`)
                    break;
                case 'msg':
                    console.info('I am on msg')
                    msgToSend = JSON.stringify({type: 'msg', name: data.name, msg: data.msg});
                    break;
            }

            Object.values(connections).forEach((conn) => {
                if (conn.readyState === 1) { // Check if connection is open
                    console.log(`Connection is open ${conn} sending message : ${msgToSend}`);
                    conn.send && conn.send(msgToSend);
                } else {
                    console.log(`Connection is closed ${conn} not sending message : ${msgToSend}`);
                }
            })

        });

    });

    return function logout(user) {
        console.log(`Logging out user ${user}`)
        connections[user].close();
        delete connections[user];

        const msg = JSON.stringify({
            type: 'join',
            names: Object.keys(connections)
        });

        console.log(`Logging out user ${user} built message`)

        Object.values(connections).forEach((conn) => {
            if (conn.readyState === 1) { // Check if connection is open
                console.log(`Connection is open ${conn} sending logout message : ${msg}`);
                conn.send && conn.send(msg);
            } else {
                console.log(`Connection is closed ${conn} not sending logout message : ${msg}`);
            }
        });

    };

}

