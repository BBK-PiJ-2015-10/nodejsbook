import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { getAll } from './model.js';
import { render } from './view.js';

// const data = [
// 	{id: 1, title: 'Iron Man', year: '2008'},
// 	{id: 2, title: 'Meines leben', year: '2025'},
// 	{id: 3, title: 'Je ne se pas', year: '2008'}
// ]

//let data = [...];

const data = [];

export async function listAction(request,response){
	const data = await getAll();
	response.render(`${dirname(fileURLToPath(import.meta.url))}/views/list`);
	//const body = render(data);
	//response.send(body);
}

//export function listAction(request,response) {
//	response.send(data);
//}