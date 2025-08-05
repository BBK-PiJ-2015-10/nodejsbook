import {createServer} from 'http';
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';

const server = createServer();
server.listen(8080, () => console.log('Server is listening'));

const httpObservable = new Observable((observer) => {
    server.on('request', (request, response) => {
            observer.next(({request, response}));
        }
    );
});

const logger = ({request}) => console.log('requesting: ', request.url);

httpObservable
    .pipe(tap(logger))
    .subscribe(({request, response}) => {
        response.end('Hello RxJS');
    });

//const server = createServer((request, response) => {

//});

//server.listen(8080, () => console.log('Server is up and running'));


// const httpObservable = new Observable((observer) => {
//     createServer((request, response) =>
//         observer.next({request, response}),
//     ).listen(8080, () => console.log('Server is listening'));
// });
//
// const logger = ({request}) => console.log(`requesting`, request.url);


//httpObservable.subscribe(() => console.log("cat"));

//httpObservable
//.pipe(tap(logger))
//.subscribe(({request, response}) => {
//response.end('Hello RxJs');
//});
