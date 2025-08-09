import {createWriteStream, createReadStream} from 'fs'

const writeStream = createWriteStream('test1.txt');

const data = ['yasser', 'alejandro'];

data.forEach((item) => {
    writeStream.write(item + `\n`);
});

writeStream.end(null);

const readable = createReadStream(`input.txt`)
const writeable = createWriteStream(`output.txt`)

writeable.on(`pipe`, (eventData) => {
    console.log(`Something piped the writeable ${eventData}`)
});

writeable.on(`unpipe`, (eventData) => {
    console.log(`Someone unpiped the writable ${eventData}`)
});

writeable.on(`finish`, (eventData) => {
    console.log(`Someone triggered finish event ${eventData}`)
})

writeable.on(`error`, (eventData) => {
    console.log(`This should never be triggered ${eventData}`)
})

readable.pipe(writeable);




