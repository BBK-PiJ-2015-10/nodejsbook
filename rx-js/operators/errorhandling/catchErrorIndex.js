import {Observable, of} from "rxjs";
import {map, catchError} from "rxjs/operators";


new Observable((observer) => {
    observer.next('test 1');
    observer.next('test 2');
    observer.error('this is a crazy error')
    observer.next('test 3');
    observer.complete();
}).pipe(
    map((data) => {
            const mappedData = data.toUpperCase();
            return mappedData;
        }
    ), catchError((err, caught) => {
            console.error(`something went off with error: ${err} and caught ${caught}`)
            return of('fall back message')
        }
    )
).subscribe((data) => console.log(data));