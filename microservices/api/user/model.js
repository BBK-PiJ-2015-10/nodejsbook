import {v4 as uuidV4} from 'uuid';
import {getChannel, queue} from '../connect.js'

export async function getAll() {
    const channel = await getChannel();
    const message = {
        id: uuidV4(),
        role: 'user',
        cmd: 'getAll'
    };
    console.log('Sending getAll message to queue')
    channel.sendToQueue(queue, Buffer.fromJson(JSON.stringify(message)));
    console.log('Sent getAll message to queue')
    return message;
}

export async function create(data) {
    const channel = await getChannel();
    const message = {
        id: uuidV4(),
        role: 'user',
        cmd: 'create',
        data: data
    }
    console.log('Sending create user');
    channel.sendToQueue(queue,Buffer.from(JSON.stringify(message)));
    console.log('Sent create user');
    return message;
}