import {createServer} from 'http'
import {interval, debounceTime, fromEvent} from 'rxjs';


const server = createServer().listen(8080, () => console.log('Listening on localhost:8080'))

// rejects request that coming within 5000 millis of each other
fromEvent(server, 'request')
    .pipe(debounceTime(5000))
    .subscribe(([, response]) => {
        console.log(`Sending response at ${new Date()}`)
        response.end('Hello again RxJS');
    });


//interval(1000)
//  .pipe(debounceTime(1200))
//.subscribe((data) => console.log(`data : ${data} at timeStamp ${new Date()}`))

// const new Observable((observer) =>
//
//
// )