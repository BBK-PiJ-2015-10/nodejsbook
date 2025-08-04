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


// you need to use async since you are using await (NON-BLOCKING)
async function greet() {
    const hello = await asyncOperation(true, 'hello', 50);
    const world = await asyncOperation(true, 'world', 50);
    return hello + ' ' + world;
}

// THIS IS NON BLOCKING
const greetingResult = greet();

console.log(greetingResult);
console.log(`What is happening`)
// This will wait
greetingResult.then((value) => {
    console.log(value);
})
console.log(`In this place`)

// This is BLOCKING
const cat = await asyncOperation(true, 'cat', 2000);
const dog = await asyncOperation(true, `dog`, 2000);

console.log(`This will appear first`);
console.log(`Welcome ${cat} and ${dog}`)
console.log(`This will appear first too`);
