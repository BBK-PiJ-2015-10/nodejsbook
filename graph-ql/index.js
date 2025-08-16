import express from 'express';
import morgan from 'morgan'
import { router  as movieRouter} from './movie/index.js';

const app = express();

app.use(morgan('common',{ intermediate: true}));

app.use('/movie',movieRouter);

app.get('/',(request,response) => response.redirect('/movie'));

app.listen(8080,() => {
    console.log(`Starting express pp on 8080`)
})


/*
CREATE TABLE movies (
id INTEGER PRIMARY KEY,
title TEXT,
year INTEGER
);
INSERT INTO movies ('title','year') VALUES ('IRON MAN',2013);
INSERT INTO movies ('title','year') VALUES ('MIMA',2014);
INSERT INTO movies ('title','year') VALUES ('BALTI',2015);
 */