import {Observable} from "rxjs";
import {mergeMap} from "rxjs";

// other flavors are switchMap, concatMap, mergeMap

const resources = () => {
    return new Observable((observer) =>
        observer.next({
            id: 1,
            name: 'Main resource',
            user: 2
        })
    );
}


const userForResource = (resource) => {
    return new Observable((observer) => {
        observer.next({
            ...resource,
            user: {
                id: 5,
                name: "John"
            }
        });
    });
}


resources()
    .pipe(mergeMap((resource) => userForResource(resource)))
    .subscribe((data) => console.log(data));