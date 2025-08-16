import { getAll} from "./model.js";

// const data = [
//     {id: 1, title: 'Iron Man', year: 2028},
//     {id: 2, title: 'Iron Woman', year: 2020},
//     {id: 3, title: 'Iron Men', year: 2021},
// ]

export async function listAction(request, response) {
    const data = await getAll();
    response.send(data);
}