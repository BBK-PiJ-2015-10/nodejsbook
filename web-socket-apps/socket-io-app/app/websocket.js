
function getName(connections, socket) {
    let name;
    for (const key in connections) {
        if (socket === connections[key]) {
            name = key;
        }
    }
    return name;
}

export default function init(io) {

    const connections = {};

    io.sockets.on('connection', (socket) => {

        socket.on('msg', (message) => {
            const name = getName(connections, socket);
            const messageWithName = {
                name,
                msg: message.msg
            }

            socket.emit('msg', messageWithName);
            socket.broadcast.emit('msg', messageWithName);

        });

        socket.on('join', function (message) {
            //const name = getName(connections,socket);
            connections[message.name] = socket;
            const messageToSend = {
                names: Object.keys(connections)
            };

            socket.emit('join', messageToSend);
            socket.broadcast.emit('join', messageToSend);

        })

    });

    return function logout(user) {
        const msgToSend = JSON.stringify({
            type: 'join',
            names: Object.keys(connections)
        });

        connections[user].broadcast.emit('join', msgToSend);
        connections[user].disconnect();
        delete connections[user];
    };

}

