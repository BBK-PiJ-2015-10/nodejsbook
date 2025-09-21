import {getAll, create} from "./model.js";

export async function getAllAction(request, response) {
    try {
        console.log('Received request to get allMovies');
        const movies = await getAll();
        response.json(movies);
    } catch (e) {
        console.log(`Error due to ${e}`);
        response.status(500).json(e);
    }
}

export async function createAction(request, response) {
    try {
        console.log('Received request to create a movie');
        const newMovie = await create(request.body);
        response.json(newMovie);
    } catch (e) {
        response.status(500).json(e);
    }
}