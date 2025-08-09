import {Readable} from 'stream';

class MyReadStream extends Readable {
    _read() {
        this.push('Hello Alex');
    }
}

const test = new MyReadStream();
let data = test.read();
console.log(data.toString());
