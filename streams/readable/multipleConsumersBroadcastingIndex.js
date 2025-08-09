import {createReadStream} from 'fs'

const options =
    {
        encoding: 'utf8',
        highWaterMark: 40
    }

const readStream = createReadStream('input.txt', options);


readStream.on('data', (data) => {
    console.log("consumer1: ", data);
})

readStream.on('data', (data) => {
    console.log("consumer2: ", data);
})


