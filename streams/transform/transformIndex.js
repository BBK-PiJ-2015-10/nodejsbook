import {createReadStream, createWriteStream} from 'fs'
import {Transform} from 'stream';

const read = createReadStream('input.txt');
const write = createWriteStream('output.tx');

class UpperCaserStream extends Transform {

    _transform(chunk, encoding, callback) {
        console.log(`I am uppercasing ${chunk.toString()}`)
        this.push(chunk.toString().toUpperCase());
        callback();
    }

}

const toUpperCase = new UpperCaserStream();

read.pipe(toUpperCase).pipe(write);