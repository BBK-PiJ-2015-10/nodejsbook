import {connect} from 'net';

const fileSocketName =  '/tmp/nodejs.sock';

const client = connect(fileSocketName, () => {
    let count = 0;
    let number = 0;
    let interval = setInterval(() => {
        if (count < 100) {
            number = Math.ceil(Math.random() * 100);
            console.log(number);
            client.write(number.toString());
            count += 1;
        } else {
            clearInterval(interval);
            client.end();
        }
    }, 500)
});

client.on('readable', () => {
    console.log('received from server subtotal ' + client.read().toString())
})