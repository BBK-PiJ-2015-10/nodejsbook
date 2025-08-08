import {Observable, Subject} from 'rxjs';

const observable = new Observable((observer) => {
    setTimeout(() => {
        observer.next(Math.random());
    }, 1000)
})

// There is no multicasting here
observable.subscribe((data) => console.log(`Consumer 1 consuming data: ${data}`));
observable.subscribe((data) => console.log(`Consumer 2 consuming data: ${data}`));


// There is multicasting here

const subject = new Subject();

// This is doing multicasting, but subscription happens first
subject.subscribe((data) => console.log(`Consumer 3 consuming data ${data}`));
subject.subscribe((data) => console.log(`Consumer 4 consuming data ${data}`));

subject.next(Math.random());

