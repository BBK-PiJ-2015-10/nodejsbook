import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {readFileSync} from 'fs'
import handlebars from "handlebars";
import {getAll, remove, get, save, insert} from './model.js';

const listItem = handlebars.compile(
    readFileSync(
        `${dirname(fileURLToPath(import.meta.url))}/views/list-item.handlebars`,
        'utf-8'
    )
);


export async function listAction(request, response) {
    const movies = await getAll();
    console.log('Fetching all movies');
    response.render('list',{
       layout: false,
       movies,
       partials: { listItem}
    });
    // response.render('list', {
    //     layout: false,
    //     movies: movies
    // })
    //response.render(`${dirname(fileURLToPath(import.meta.url))}/views/list`, {
    //  movies,
    //});
}

export async function removeAction(request, response) {
    const id = parseInt(request.params.id, 10);
    await remove(id);
    response.redirect(request.baseUrl);
}

export async function formAction(request, response) {
    let movie = {id: '', title: '', year: ''};
    if (request.params.id) {
        movie = await get(parseInt(request.params.id, 10));
    }

    response.send("cat");
}

export async function saveAction(request, response) {
    const movie = {
        id: request.body.id,
        title: request.body.title,
        year: request.body.year
    };
    await save(movie);
    response.redirect(request.baseUrl);
}
