import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";


new Observable((observer) => {
    setTimeout(() =>
            observer.next('first packet')
        , 500);
    setTimeout(() =>
            observer.next(`second packet`)
        , 2000)
}).pipe(timeout(1000))
    // Watch: This signature uses named arguments
    .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error(`Subs received error ${error}`)
    });