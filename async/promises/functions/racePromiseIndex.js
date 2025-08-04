function asyncOperation(resolve, value, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
                if (resolve) {
                    res(value);
                } else {
                    rej(value);
                }
            }
            , time
        );
    });
}


Promise.race([
        asyncOperation(true, `first`, 100),
        asyncOperation(true, `second`, 50),
        asyncOperation(true, `third`, 75)
    ]
).then((value) => {
    console.log(`The winner is ${value}`);
})