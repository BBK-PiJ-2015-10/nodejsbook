let data = [
    {id: 1, title: 'Iron Man', year: '2008'},
    {id: 2, title: 'Thor', year: '2011'},
    {id: 3, title: 'Captain America', year: '2011'}
];

export function getAll() {
    return Promise.resolve(data);
}

export function remove(id) {
    data = data.filter(movie => movie.id !== id);
    console.log(`Deleted movie with id ${id}`);
    return Promise.resolve();
}

export function get(id) {
    console.log(`Fetching movie with id ${id}`);
    return Promise.resolve(
        data.find((movie) => movie.id === id)
    );
}

export function getNextId() {
    return Math.max(...data.map((movie) => movie.id)) + 1;
}

export function insert(movie) {
    movie.id = getNextId();
    data.push(movie);
    console.log(`Inserted a movie to DB ${movie}`);
}

export function update(movie) {
    movie.id = parseInt(movie.id, 10);
    const index = data.findIndex((item) => item.id === movie.id);
    data[index] = movie;
    console.log(`Replaced movie ${movie}`)
}

export function save(movie) {
    if (movie.id === '') {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}