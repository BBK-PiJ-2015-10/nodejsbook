

let value = null;
let count = 0;
const callback = function (){
    if (count ++ % 10 === 0){
        const { rss, heapTotal, heapUsed } = process.memoryUsage();
        let percentage = heapUsed / heapTotal;
        console.log(
            `RSS: ${rss}, Heap Total: ${heapTotal}, Heap Used: ${heapUsed}, % : ${percentage}`
        );
    }
    const originalValue = value;
    function doSomething(){
        if (originalValue) return true;
    }
    value = {
        data: new Array(1000000).fill(`xxx`),
        getSize() {
            return data.length;
        },
    };
    //console.log(`The length is done`);
};

setInterval(callback,100);