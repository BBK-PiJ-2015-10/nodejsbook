import { observeOn} from 'rxjs';
import { of, queueScheduler, asapScheduler, asyncScheduler} from 'rxjs';

console.log('Start')

// blocks console.log('end')
of('This is sync processing')
    .pipe(observeOn(queueScheduler))
    .subscribe((data) => console.log(data));

// does not block console.log('end')
of('This is async but not prioritized')
    .pipe(observeOn(asyncScheduler))
    .subscribe((data) => console.log(data));

of('This is async but prioritized')
    .pipe(observeOn(asapScheduler))
    .subscribe((data) => console.log(data));

// does not block console.log('end')
console.log('End')