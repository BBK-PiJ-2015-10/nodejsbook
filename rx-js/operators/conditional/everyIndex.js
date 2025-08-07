import {range} from 'rxjs';
import {every} from 'rxjs/operators'

range(1, 10)
    .pipe(
        every((data) => data < 10)
    )
    .subscribe((result) =>
        result ?
            console.log(`P1 All lower than 10 is ${result} `) :
            console.log(`P2 All lower than 10 is ${result} `
            ));
