import { createServer } from 'http';
import { dirname} from 'path';
import { fileURLToPath} from 'url';
import { readFile} from 'fs';
import { add } from './add.mjs'
import { wordCount as wc } from './word-count.js'

// example of server creation

const server = createServer((request, response) => { 

	// example of File and Directory module

	const _filename = fileURLToPath(import.meta.url);
	const _dirname = dirname(_filename);

	console.log(_filename);
	console.log(_dirname);

	// Example of Buffer

	//readFile('input.txt',(err,data) => {
	//	console.log(data);
	//	console.log(data.toString());
	//});

	// Example of timeOut and interval

	//let counter = 1;
	//const interval = setInterval(() => {
	//	console.log(`${counter} iteration`);
	//	if (counter++ > 2){
	//		clearInterval(interval);
	//	}
	//},100);

	console.log('FUCNER');

	// example of EventTarget and Event

	const target = new EventTarget();

	target.addEventListener('customEvent',(event) => {
		console.log(`${event.type} was triggered`);
	});

	const event = new Event('customEvent');

	target.dispatchEvent(event);

	// example of global variable

	function createGlobal() {
		global.myName = 'alexis';
	}
	createGlobal();
	console.log(myName);


	// example of message channels

	const { port1, port2 } = new MessageChannel();

	port1.on('message',(message) => {console.log(message);});

	port2.postMessage({ data: 'Hello Mima'});

	// example of moduldes

	const url =  new URL(request.url,'http://localhost:8080');

	console.log("Welcome to Node Js");

	console.log(url)
	console.log('Name: ',url.searchParams.get('name'));

	let ale = url.searchParams.get('name');

	console.log(ale);

	// example of handlingRejections

	process.on('unhandledRejection',(error) => {
		console.error('unhandledRejection');
		console.error(error);
	});

	function withPromiseFailure() {
		return Promise.reject('Whoops, an Error, Did it again');
	}

	withPromiseFailure().then(() => {
		console.log('Promise resolved');
	});

	// example of queueMicrotask

	setTimeout(() => {
		console.log('This is an async task with a time out of 0');
	},0);

	Promise.resolve().then(() => {
		console.log('Promise resolved');
	});

	queueMicrotask(() => {
		console.log('This is the microtask from queueMicrotask')
	});

	process.nextTick(() => {
		console.log('This is from next tick');
	});

	// example of import/export commonJs (require)

	//const add = require('./add');

	const result = add(2,3);
	console.log('result: ',result);

	// example of custom module

	const sentence = 'Hello, it is me what you are looking for, i saw it, you saw it';

	const wordCount = wc(sentence);

	console.log(sentence);

	for (let i in wordCount){
		console.log(wordCount[i] + ' x ' + i);
	}






	response.writeHead(200,{ 'content-type': 'text/html; charset=utf-8'});

    const body = `
    	<html>
    		<head>
    			<meta charset="utf-8">
    	        <title>Node.js demo</title>
    		</head>
    	    <body>
    		<h1 style="color:green">Hello ${url.searchParams.get('name')}</h1>	
    	    </body> 
    	</html
    `;

	response.end(body);
});

// example of server start up

server.listen(8080,() => {
	console.log(
       `Server is listening to http://localhost:${server.address().port}`
	);
}); 
 