import { Writable} from 'stream';

class MyWriteableStream extends Writable {

    _write(chunk, enc, done) {
        console.log(`WRITE: ${chunk.toString()}`);
        done();
    }
}


const ws = new MyWriteableStream();
for (let i = 0; i < 10; i++) {
    ws.write(`Hello ` + i);
}
ws.end();