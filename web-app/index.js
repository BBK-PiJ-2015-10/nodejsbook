import { Server} from 'http';
import { getList} from './list.js';
import data from './data.js'
import { deleteAddress} from './delete.js'
import { saveAddress} from './save.js'
import querystring from 'querystring';
//import {} from 'querystring'
import { getForm} from './form.js'
import { readFile,rename} from 'fs';
import formidable from 'formidable';
//import formidable from 'formidable';
//import { IncomingForm } from "formidable";


const server = new Server();

//const http = http;
let addresses = data.addresses;
//const getList= getList;
//const deleteAddress = deleteAddress;
//const getForm = getForm;

server.on('request',(request,response) => {
	const parts = request.url.split('/');
	if (parts.includes('delete')){
		addresses = deleteAddress(addresses,parts[2]);
		redirect(response,'/');
	} else if (parts.includes('new')){
		send(response,getForm());
	} else if (parts.includes('edit')){
		send(response,getForm(addresses,parts[2]));
	} else if (parts.includes('save') && request.method === 'POST'){ 
		const form = formidable();
		//const form = formidable().IncomingForm();
		//const form = new formidable.IncomingForm();
		form.parse(request, (error, address, files) => { 
			 if (error) {
      			console.error(`Error parsing the form: ${error.message}`);
    		 } else {
      			console.log(`Parsed fields: ${JSON.stringify(address)}`);
      			console.log(`Parsed files: ${JSON.stringify(files)}`);
    		}
			if (files.upload){
			console.log(`Uploaded file path: ${files.upload.filepath}`);	
		    rename(files.upload.filepath, `public/assets/${files.upload.originalFilename}`, (renameError) => {
        		if (renameError) {
          		console.error(`Error renaming file: ${renameError.message}`);
        		} else {
          		address['file'] = `/assets/${files.upload.originalFilename}`;
        		}
      		});		
			//rename(files.upload.path,`public/assets/${files.upload.name}`,() => { 
			//		address['file'] = `/assets/${files.upload.name}`; 
			  //  });
		}
		console.log(`WOOF1 is ${address}`)
		addresses = saveAddress(data.addresses,address);
		redirect(response,'/');
		});
	} else if (parts.includes('assets')){
		readFile(`public${request.url.replaceAll('%20',' ')}`,(err, data) => {
			if (err){
				response.statusCode = 404;
				response.end();
			} else {
				response.send(data);
			}
		});
	}
		//console.log(`Got a save with part1 ${parts[1]} and part2 ${parts[2]}`);
		//let body = '';
		//request.on('readable',() => {
		//	const data = request.read();
		//	if (data !== null) {
		//		body = body + data;
		//	} else {
		//		body = body + '';
		//	}
			//body += data !== null ? data : '';    
        //	});
		//request.on('end',() => {
		//	let localAddressObject = querystring.parse(body);
		//	addresses = saveAddress(data.addresses,localAddressObject);
		//	redirect(response,'/');
		//});
	 else if (request.url === '/style.css'){
		console.log("Someone called the style if");
		readFile('public/style.css','utf8',(err,data) => {
			if (err){
				console.log("ERROR on style sheet processing");
				response.statusCode = 404;
				response.end();
			} else {
				console.log("sent style sheet");
				response.end(data);
			}
		});
	}
	else { 
		send(response, getList(addresses));
	}
});	


// const server = createServer((req,resp) => {
// 	send(response,getList(addresses));
// });

// server.on('request',(request,response) => {
// 	let responseBody;
// 	const parts = request.url.split('/');
// 	if (parts.includes('delete')){
// 		data.addresses = deleteAddress(data.addresses,parts[2]);
// 		redirect(response,'/');
// 	} else {
// 		//response.statusCode = 200;
// 		//response.setHeader('content-type','text/html');
// 		responseBody = getList(data.addresses);
// 		send(response,responseBody);
// 	}
// });

function redirect(response, to){
	response.writeHead(302,{ location: '/', 'content-type':'text/plain'});
	response.end('302 Redirecting to /');
}

function send(response, responseBody){
	response.writeHead(200,{'content-type':'text/html'});
	response.end(responseBody);
}



// This is a callback function bound to the listening event

server.on('listening',() => {
	console.log('Address book reached via http://localhost:8080')
});


// this is the event

server.listen(8080);
