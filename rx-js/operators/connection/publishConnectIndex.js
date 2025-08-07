import {Observable} from 'rxjs';
import {publish, share} from 'rxjs/operators';

const observable = new Observable((observer) => {
    observer.next(Math.random());
    observer.next(Math.random());
}).pipe(publish())


observable.subscribe((data) => console.log(`Reading from po1 ${data}`));
observable.subscribe((data) => console.log(`Reading from po2 ${data}`));

observable.connect();