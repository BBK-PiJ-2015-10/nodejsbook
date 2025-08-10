import {connect} from 'net';
import {readFile} from 'fs';

let port = 8080;
let host = '127.0.0.1';

readFile('logo.png', (err, data) => {
    const client = connect(
        {port, host}, () => {
            console.log('Sending a file');
            client.end(data.toString('base64'));
            console.log('Sent a file')
        }
    )
})