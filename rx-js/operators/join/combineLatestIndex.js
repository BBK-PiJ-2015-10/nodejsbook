import {timer} from 'rxjs';
import {combineLatest, map} from "rxjs";


const randomInt = () => Math.floor(Math.random() * 100);

const timer1 = timer(0, 500).pipe(map(() => randomInt()));
const timer2 = timer(0, 1000).pipe(map(() => randomInt()));
const timer3 = timer(0, 1500).pipe(map(() => randomInt()));

combineLatest([timer1, timer2, timer3]).subscribe(([t1, t2, t3]) => {
    console.log(`
    ${new Date()},
    Timer1 ${t1},
    Timer2 ${t2},
    Timer3 ${t3},
    `)
});
