import {connect} from "amqplib";

//const rabbitMqAddress = 'amqp://guest:guest@localhost:5672'
//const rabbitMqAddress = 'amqp://local_rabbit_user:local_rabbit_password@localhost:5672'
//const rabbitMqAddress = 'amqp://rabbit.mq';
// This one works
const rabbitMqAddress = 'amqp://localhost:5672'

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
            console.log(`Rabbit mq ready ${channel}`)
            return channel;
        }
    } catch (error) {
        console.error(`error getting a channel ${error}`);
        throw error;
    }
}
