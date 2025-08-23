import {getAllAction, createAction} from "./controller.js";
import {getChannel, queue} from "./connect.js";

const channel = await getChannel();

channel.consume(queue, (message) => {
    console.log(`Received a message ${message.content.toString()}`)
    const messageData = JSON.parse(message.content.toString());
    if (messageData.role === 'user') {
        switch (messageData.cmd) {
            case 'getAll':
                getAllAction(channel, message.id);
                break;

                //
            // {
            // 	"role": "user",
            // 	"cmd": "create",
            // 	"id": "b2deccc7-3437-4c98-9483-6cbef1478970",
            // 	"data": "hello there"
            // }
            case 'create':
                console.log('Will call createAction');
                createAction(channel, messageData.id, messageData.data);
                break;
            default:
                console.error('Unknown command');
                channel.nack(message);
                break;
        }
    }
});