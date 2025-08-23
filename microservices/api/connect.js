import {connect} from 'amqplib';

const rabbitMqAddress = 'amqp://localhost:5672'
// 'amqp://rabbitmq'
let channel = null
export const queue = 'user'

const registry = {};

export function register(id, response) {
    registry[id] = response;
}

export function answer(id, data) {
    registry[id].send(data);
    delete registry[id];
}

export async function getChannel() {
    try {
        if (channel) {
            return channel;
        }
        const connection = await connect(rabbitMqAddress)
        channel = await connection.createChannel();
        const ok = await channel.assertQueue(queue);
        if (ok) {
            return channel;
        }
    } catch (error) {
        console.log(`Error getting channel ${error}`);
        throw error;
    }
}

export function registerHandler(channel) {
    channel.consume(queue, (receivedMessage) => {
        const messageData = JSON.parse(receivedMessage.content.toString());
        if (messageData.role === 'user' && messageData.cmd === 'answer') {
            channel.ack(receivedMessage);
        } else {
            channel.nack(receivedMessage);
        }
    });
}