function asyncOperation(resolve, value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (resolve) {
                    resolve(value);
                } else {
                    reject(value);
                }
            }
            , time)
    });
}


asyncOperation(true, 'hello', 100)
    .then((data) => {
            console.log(data + ' ');
            return asyncOperation(true, 'world', 200);
        }
    ).then((data) => {
    console.log(data);
    return `|`;
})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(`Something went off due to `, error)
    })
;