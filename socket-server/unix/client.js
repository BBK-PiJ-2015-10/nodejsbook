import {connect} from 'net';

const fileName = '/tmp/nodejs.sock'

const client = connect(fileName, (eventData) => {
    console.log(`connected to the server ${eventData}`)
    client.write('Hello Server');
});