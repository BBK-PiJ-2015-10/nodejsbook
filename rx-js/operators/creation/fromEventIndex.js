import {createServer} from 'http';
import {fromEvent} from 'rxjs';

const server = createServer().listen(8080, () =>
    console.log(`Server is up and listening`)
);

fromEvent(server, 'request').subscribe(
    ([, response]) => {
        response.end('Hello again again from Rxjs');
    }
)