import express from 'express';
import morgan from 'morgan';
import {createWriteStream} from 'fs';
import {dirname} from "path";
import {fileURLToPath} from "url";
import {router as movieRouter} from './movie/index.js';

const app = express()

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))

app.set('view engine', 'pug')


app.use('/movie', movieRouter);

const accessLogStream = createWriteStream('access.log', {flags: 'a'});

app.use(morgan('common', {
    immediate: true,
    stream: accessLogStream
}));


//app.use(morgan('common',{ immediate: true}));

app.get('/', (request, response) => response.redirect('/movie'));


app.listen(8080, () => {
    console.log('Movie database accesible at http://localhost:8080');
})