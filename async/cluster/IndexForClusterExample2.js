import cluster from 'cluster';
import {createServer} from 'http';

if (cluster.isPrimary) {
    console.log('Starting fork')
    cluster.fork();
    cluster.fork();
    console.log('Done with fork')
    cluster.on('listening', (worker) => {
        console.log(`I was told Worker ${worker.id} is ready to mingle`);
        setTimeout(() => {
            worker.send('Hello worker');
        }, 5000)
    });

    for (let i in cluster.workers) {
        cluster.workers[i].on(
            'message',
            function (i, msg) {
                console.log(`Inside Primary | Worker ${i} => Primary: ${msg}`)
            }.bind(this, i),
        );
    }
} else {
    createServer((request,response) => {
        response.end(`Hello Client`)
    }).listen(`8080`);

    cluster.worker.on('message', (msg) => {
        console.log(`Inside worker || Primary => Worker ${cluster.worker.id}: ${msg}`)
    })

    console.log('Calling primary');
    cluster.worker.send(`Hello Primary from a worker fan`);
    console.log(`Done calling primary`);

}