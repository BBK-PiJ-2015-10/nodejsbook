import {range} from 'rxjs';
import {scan} from 'rxjs/operators';

range(1, 10)
    // This scan is like a fold right
    .pipe(scan((acc, current) => acc + current))
    .subscribe((accValue) => console.log(accValue));