import sqlite from "sqlite3";

const db = new sqlite.Database('./movie.db');

export function get(query = {}) {
    return new Promise((resolve, reject) => {
        const queryElements = [];
        if (query) {
            for (let key in query) {
                queryElements.push(`${key} = ?`)
            }
        }

        const queryString = `SELECT *
                             FROM users
                             WHERE ${queryElements.join(' AND ')}`;
        console.log(`This is the query ${queryString}`)
        console.log(`These are the values ${Object.values(query)}`)

        db.get(queryString, Object.values(query), (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })

    });
}