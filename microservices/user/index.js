import {getAllAction, createAction} from "./controller.js";
import {getChannel, queue} from "./connect.js";

const channel = await getChannel();

channel.consume(queue, (message) => {
    console.log(`Received a message ${message.content.toString()}`)
    const messageData = JSON.parse(message.content.toString());
    if (message.role === 'user') {
        switch (message.cmd) {
            case 'getAll':
                getAllAction(channel, message.id);
                break;
            case 'create':
                createAction(channel, messageData.id, messageData.data);
                break;
            default:
                console.error('Unknown command');
                channel.nack(message);
                break;
        }
    }
});