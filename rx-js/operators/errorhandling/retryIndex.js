import {Observable} from "rxjs";
import {retry} from "rxjs/operators";


new Observable((observer) => {
    console.log('Starting');
    observer.next(Math.random());
    observer.next(Math.random());
    observer.error('Lost connection');
    observer.next(Math.random());
}).pipe(retry(2))
    .subscribe((data) => console.log(`Data ${data} at ${new Date()}`));