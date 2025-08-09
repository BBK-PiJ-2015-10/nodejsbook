import {Readable} from 'stream';

class TemperatureReader extends Readable {

    constructor(opt = {objectMode: true}) {
        super(opt);
        this.items = 0;
        this.maxItems = 10;
    }

    _read() {
        this.emitValue();
    }

    emitValue() {
        setTimeout(() => {
            if (this.items++ < this.maxItems) {
                console.log(`Items are ${this.items}`)
                this.push(this.createValue());
            } else {
                console.log('woof');
                this.push(null);
            }
        }, Math.floor(Math.random() * 2) * 1000)
    }

    createValue() {
        return {
            date: new Date(),
            temp: `${Math.floor(Math.random() * 1000 - 273)} C`
        };
    }

}

const tempReaderStream = new TemperatureReader();
tempReaderStream.on('readable', () => {
    let data;
    while (null !== (data = tempReaderStream.read())) {
        console.log(JSON.stringify(data));
    }
})

