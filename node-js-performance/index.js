
// simple run with node index.js
// with node --inspect-brk index.js

function mainRunner (delayInSec) {
    const start = Date.now();

    while (true) {

        if (Date.now() - start >= delayInSec * 1000){
            break;
        }

    }


}



console.log('starting')
console.time('sleep')
mainRunner(10);
console.timeEnd('sleep')
console.log('ending')
