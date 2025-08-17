import sqlite from "sqlite3";




const data = [
    {id: 1, title: 'Iron Man', year: 2028},
    {id: 2, title: 'Iron Woman', year: 2020},
    {id: 3, title: 'Iron Men', year: 2021},
]

export function getAll() {
    return Promise.resolve(data);
}