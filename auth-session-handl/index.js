import express from 'express';
import morgan from 'morgan'
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {router as movieRouter} from './movie/index.js';
import auth from "./auth.js";
import { ensureLoggedIn } from 'connect-ensure-login';

const app = express();

app.set('view engine', 'pug');

app.use(express.static(dirname(fileURLToPath(import.meta.url)) + '/public'));

app.use(morgan('common', {intermediate: true}));
app.use(express.urlencoded({extended: false}));

auth(app);

app.use('/movie',ensureLoggedIn('/login.html'), movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

app.listen(8080, () => {
    console.log(`Starting express pp on 8080`)
})

// sqlite3 movie.db

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

/*
CREATE TABLE users(
id INTEGER PRIMARY KEY,
firstname TEXT,
lastname TEXT,
username TEXT,
password TEXT
);
INSERT INTO users (firstname,lastname,username,password) VALUES
('Sebastian','Springer','sspringer','098f6bcd4621d373cade4e832627b4f6');
 */