import {Observable} from 'rxjs';
import {defaultIfEmpty} from 'rxjs/operators';

new Observable((observer) => {
        observer.complete();
    }
).pipe(
    defaultIfEmpty('This is back up since empty was generated')
).subscribe((data) =>
    console.log(data)
)
;