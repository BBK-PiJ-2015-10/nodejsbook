import {connect} from "amqplib";

const rabbitMqAddress = 'amqp://rabbit.mq';

let channel = null;
export const queue = 'user';

export async function getChannel() {
    try {
        if (channel) {
            return channel;
        }
        const connection = await connect(rabbitMqAddress);
        channel = await connection.createChannel();
        const ok = await channel.assertQueue(queue);
        if (ok) {
            return channel;
        }
    } catch (error) {
        console.error(`error getting a channel ${error}`);
        throw error;
    }
}
