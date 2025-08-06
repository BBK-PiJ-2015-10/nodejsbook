import {range, Observable} from 'rxjs';
import {take, first, last} from "rxjs";

range(1, 10)
    .pipe(first())
    .subscribe((data) => console.log(`The first element is`, data));

// other flavors takeUntil and skipUntil
range(1, 10)
    .pipe(take(2))
    .subscribe((data) => console.log('The first two taken elements are', data));

range(1, 10)
    .pipe(last())
    .subscribe((data) => console.log(`The last element is`, data));

new Observable((observer) => {
    let count = 0;
    const interval = setInterval(() => {
        if (++count >= 10) {
            clearInterval(interval);
            observer.next(count);
            observer.complete()
        } else {
            observer.next(count);
        }
    }, 10)
})
    .pipe(last())
    .subscribe((data) => console.log(`The last element is`, data))

