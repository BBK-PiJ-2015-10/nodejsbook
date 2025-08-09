import {createWriteStream} from 'fs';

const writeStream = createWriteStream('buffer.txt');

writeStream.write('Hello\n')
writeStream.cork();
writeStream.write('World\n')
setTimeout(() => {
    writeStream.uncork();
    writeStream.write('!!!');
    writeStream.end();
}, 10000);

// follow with tail -f writable/output_buffer.txt