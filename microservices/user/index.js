import {getAllAction, createAction} from "./controller.js";
import {getChannel, queue} from "./connect.js";

const channel = await getChannel();

channel.consume(queue, (message) => {
    //console.log(`Received a message ${message.content.toString()}`)
    const messageData = JSON.parse(message.content.toString());
    if (messageData.role === 'user') {
        switch (messageData.cmd) {
            case 'getAll':
                console.log(`Received a getAll message ${message.content.toString()}`)
                getAllAction(channel, messageData.id);
                channel.ack(message);
                break;
            // {
            // 	"role": "user",
            // 	"cmd": "create",
            // 	"id": "b2deccc7-3437-4c98-9483-6cbef1478970",
            // 	"data": "hello there"
            // }
            case 'create':
                console.log('Received a create request');
                createAction(channel, messageData.id, messageData.data);
                console.log('Processed a create request');
                channel.ack(message);
                break;
            default:
                //console.error('Unknown command');
                channel.nack(message);
                break;
        }
    }
});