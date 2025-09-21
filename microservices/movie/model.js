import mysql from 'mysql2/promise';

const userDbhost = '127.0.0.1'
const userDbuser = 'root'
const userDbPassword = 'password'
const userDbDatabase = 'moviedb'


async function connect() {
    const connection = await mysql.createConnection({
            host: userDbhost,
            user: userDbuser,
            password: userDbPassword,
            database: userDbDatabase,
            port: '3306'
        }
    );
    return connection;
}

export async function getAll() {
    const connection = await connect();
    const query = 'SELECT * FROM movie';
    const [data] = await connection.query(query);
    connection.end();
    return data;
}

export async function create(movie) {
    const connection = await connect();
    const query = 'INSERT INTO movie (title,year) VALUES (?,?)';
    const [result] = await connection.query(query, [movie.title, movie.year]);
    connection.end();
    return {...movie, id: result.insertId}
}