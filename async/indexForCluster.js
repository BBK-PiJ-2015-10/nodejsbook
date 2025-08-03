
import cluster from 'cluster';
import { createServer } from 'http';

const timeOut = 300000;

if (cluster.isPrimary){
    console.log('This is the primary')
    //cluster.setupPrimary({silent: true}); //no logs from worker

    setTimeout(cluster.disconnect,timeOut);

    cluster.on('exit',function (){
        console.log(`Workers terminated after ${timeOut} ms`)
    })

    cluster.fork();
    cluster.fork();
    cluster.fork();
    console.log('Forked workers')
}

if (cluster.isWorker){
    console.log(`Worker ${cluster.worker.id} started`);
    createServer((req,res) => {
        console.log(`Worker ${cluster.worker.id} has received a request`);
        res.end(`Worker ${cluster.worker.id} xxx`);
    }).listen(`8080`);
}