import {interval} from "rxjs";
import {map, buffer} from "rxjs/operators";


interval(100)
    .pipe(
        map(() => Math.floor(Math.random() * 100)),
        // This is basically grouping in an array every 1000 millis
        buffer(interval(1000))
    )
    .subscribe((data) => console.log('Data is : ', data));
