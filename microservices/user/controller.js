import {getAll, create} from "./model.js";
import {getChannel, queue} from "./connect.js";

function createMessage(id, data) {
    return {
        role: 'user',
        cmd: 'answer',
        id,
        data
    };
}

async function send(message) {
    const channel = await getChannel();
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}

export async function getAllAction(channel, id) {
    const data = await getAll();
    const message = createMessage(id, data);
    console.log(`Sending message ${JSON.stringify(message.toString())}`)
    send(message);
    console.log(`Sent message ${JSON.stringify(message.toString())}`)
}

export async function createAction(channel, id, data) {
    console.log('Calling create data')
    const newData = await create(data);
    const message = createMessage(id, newData);
    console.log(`Sending message  ${JSON.stringify(message)}`)
    send(message)
    console.log(`Sent message  ${JSON.stringify(message)}`)
}