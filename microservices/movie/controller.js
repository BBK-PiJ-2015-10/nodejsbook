import {getAll, create} from "./model.js";

export async function getAllAction(request, response) {
    try {
        console.log("WOOF WOOF received request to fetch all movies");
        const movies = await getAll();
        response.json(movies);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function createAction(request, response) {
    try {
        console.log(`WOOF WOOF received request to create a movie ${request}`);
        const movie = await create(request.body);
        response.json(movie);
    } catch (e) {
        console.log(`Failures due to  ${e}`);
        response.status(500).json(e);
    }
}