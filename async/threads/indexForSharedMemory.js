import {Worker} from 'worker_threads';

const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 1000);
const arr = new Int32Array(sharedBuffer);

const worker = new Worker('./workerSharedMemory', {
    workerData: arr
});

worker.on('message',(data) => {
    console.log(`Worker seems to be ${data}`)
    arr.forEach((element) => console.log(element));
})

console.log('Main started');