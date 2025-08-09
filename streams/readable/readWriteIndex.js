import {createReadStream, createWriteStream} from 'fs';

const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('output.txt');

console.log('Starting')
// I believe the pipe will make it switch to PUSH mode
readStream.pipe(writeStream);
console.log('Done')