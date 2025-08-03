import {readFile} from 'fs';

function promisedFile(filaname) {
    return new Promise((resolve, reject) => {
        readFile(filaname, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

promisedFile('input.txt')
    .then((data) => {
        console.log(`Content of the file is `, data);
    })
    .catch((error) => {
            console.error(`An error occurred: `, error.message);
        }
    )