
import { PerformanceObserver, performance } from 'perf_hooks';
import { appendFile } from 'fs/promises';

// simple run with node index.js
// with node --inspect-brk index.js
// go to chrome://inspect

// npm install --save-dev cross-env
if (process.env.MEASURE){
    console.log('Starting setting up performance observer')
    const obs = new PerformanceObserver((items) => {
        const entries = items.getEntries();
        entries.forEach(( { name, duration}) =>{
            appendFile(`time.log`,`${name}: ${duration}\n`);
            });
        });
    obs.observe({ entryTypes: [`measure`] });
    console.log('Completed setting up performance observer')
}

function mainRunner (delayInSec) {
    const start = Date.now();

    while (true) {

        if (Date.now() - start >= delayInSec * 1000){
            break;
        }

    }


}



console.log('starting')
performance.mark(`sleep start`)
console.time('cat')
mainRunner(10);
console.timeEnd('cat')
performance.mark(`sleep end`);
performance.measure(`sleep: `,`sleep start`,`sleep end`);
console.log('ending')
