function asyncOperation(resolve, value, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (resolve) {
                res(value);
            } else {
                rej(value);
            }
        }, time);
    });
}


// you need to use async since you are using await
async function greet() {
    const hello = await asyncOperation(true, 'hello', 1000);
    const world = await asyncOperation(true, 'world', 1000);
    return hello + ' ' + world;
}


const greetingResult = greet();

console.log(greetingResult);
console.log(`What is happening`)
// This will wait
greetingResult.then((value) => {
    console.log(value);
})
// This is non blocking
console.log(`In this place`)
