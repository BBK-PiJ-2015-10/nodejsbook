import {Observable} from "rxjs";


const observable = new Observable((observer) => {
    observer.next('Hello');
    observer.next('World');
    observer.error('An error blasted');
    observer.next('Are you still there');
    observer.complete();
});


observable.subscribe(
    (data) => console.log(`Got some data`, data),
    (error) => console.error(`Something went bad`, error),
    (finished) => console.log(`Got a finished`, finished)
)