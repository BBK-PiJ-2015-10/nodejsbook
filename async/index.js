import {fork} from 'child_process';

if (process.argv[2] && process.argv[2] === 'child') {
    console.log(`I am the child`);
    let n = 1;
    let results = 0;
    outerLoop: while (results <= 10) {
        n += 1;
        for (let i = 2; i <= Math.sqrt(n); i += 1) {
            if (n % i === 0) {
                continue outerLoop;
            }
        }
        process.send({prime: n});
        results += 1;
    }
    process.exit
} else {
    console.log(`I am the father`);
    const child1 = fork(process.argv[1], ['child']);
    const child2 = fork(process.argv[1], ['child']);
    const child3 = fork(process.argv[1], ['child']);

    child1.on('message', (data) => {
        console.log(`child1: ` + data.prime);
    })
    child2.on('message', (data) => {
        console.log(`child2: ` + data.prime);
    })
    child3.on('message', (data) => {
        console.log(`child3: ` + data.prime)
    });

    console.log(`This is not going to wait for the children`);
}


// const cmd = 'ls';
//
// exec(cmd,(error,stdOut, stdErr) => {
//     if (error){
//         console.log(`Bumped into an error`);
//     } else {
//         console.log(`All good`);
//         console.log(stdOut);
//     }
// });

