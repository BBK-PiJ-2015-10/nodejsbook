import {getAll, create} from "./model.js";
import {register} from "../connect.js";

export async function getAllAction(request, response) {
    try {
        console.log('Asking for all user data');
        const {id} = await getAll();
        console.log('Received all user data')
        response.json(userData);
        //register(id, response);
    } catch (error) {
        console.log(`error ${error}`);
        response.status(500).json('Internal server error');
    }
}

export async function createAction(request, response) {
    try {
        console.log('Asking to create action');
        const {id} = await create(request.body);
        console.log(`Received answer to create user ${id}`)
        response.json(newUser);
        //register(id, response);
    } catch (error) {
        console.log(`error ${error}`);
        response.status(500).json('Internal server error');
    }
}