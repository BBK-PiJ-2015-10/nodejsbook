import {createReadStream} from 'fs';

const options = {
    encoding: 'utf8',
    // This is to adjust the size of the chunking
    //highWaterMark: 20
}

const readStream = createReadStream('input.txt', options);

// readable event with .read() PULL mode
readStream.on('readable', () => {
    // THIS IS PULLING
    let data = readStream.read();
    if (data) {
        console.log('BEGINNING CHUNK')
        console.log(data);
        console.log('ENDING CHUNK');
    }
})
// to switch to push mode ()
// register a listener for a data event
// OR call the resume method
// pipe method

readStream.on('close', () => {
    console.log('The stream1 has been closed');
})

const readStream2 = createReadStream('gibt-es-nicht.txt', options)

readStream2.on('readable', () => {
    let data = readStream2.read()
    if (data) {
        console.log('READING STREAM 2');
        console.log(data);
    }
})

readStream2.on('close', () => {
    console.log('STREAM2 has been closed');
})

readStream2.on('error',() => {
    console.log('This is capturing the error');
})