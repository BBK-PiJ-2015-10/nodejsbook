import {createWriteStream} from 'fs';

const writeStream = createWriteStream('flow.txt');

const data = 'I love Node.js';

let i = 3000;

myWrite();

function myWrite() {
    console.log('WOOF')
    let ok = true
    do {
        i -= 1;
        if (i === 0) {
            writeStream.end(data);
        } else {
            ok = writeStream.write(data);
        }
    } while (i > 0 && ok);
    if (i > 0) {
        console.log('Wait will drain it');
        writeStream.once('drain', myWrite);
    }
}