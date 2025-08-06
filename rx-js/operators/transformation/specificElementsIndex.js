import {range, throwError} from 'rxjs';
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



