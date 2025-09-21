import {getAll} from "./model.js";

export async function getAllAction(request, response) {
    try {
        console.log("WOOF WOOF received request to fetch all movies");
        const movies = await getAll();
        response.json(movies);
    } catch (e) {
        response.status(500).json(e);
    }
}