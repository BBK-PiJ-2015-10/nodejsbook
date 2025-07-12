
import { add } from './module';
import { multiply } from './samplemodule'

class Movie {
	public rating: number = 1;
	constructor(public title: string, public year: number){
	}
}

function rateMovie(movie: Movie, rating: number){
	movie.rating = rating;
}

const ironMan =  new Movie('iron',2025);

rateMovie(ironMan,19993);

const cat : string = 'Sebastian';


enum Status {
	open,
	done,
}

const task = {
	title: 'get up',
	status: Status.done,
}

if (task.status === Status.done){
	console.log('Erledigt');
}

let age: number | string;

age = 42;

console.log(`age is right now ${age}`)

age = 'alexis';

console.log(`age was updated to ${age}`)

class User {
	name = '';
	setName(name: string): void {
		this.name = name;
	}
}

const userA = new User();
userA.setName('John');
const userB = new User();
userB.setName('Steve');

function compare(userA: User, userB: User): Boolean {
	return userA.name === userB.name;
}


const comp = (userA: User, userB: User): Boolean => {
	return userA.name === userB.name;
}


console.log('compare:' , compare(userA,userB));
console.log('comp:' , comp(userA,userB));


function defaultParameters(a: number, b = 4): number {
	return a + b;
}

console.log('with default :', defaultParameters(3));

function withOptionalParameter(a: number, b?:number): number{
	return b !== undefined ? a + b : a;
}

console.log('with optional',withOptionalParameter(5));
console.log('with optional',withOptionalParameter(5,6));

function withVarArgsParams(a: number, ...numbers: number[]){
	return numbers.reduce((prev,curr) => prev + curr,a);
}

console.log('with var args: ',withVarArgsParams(1,2,3));


console.log('adding: ', add(10,22));

class Theater {

	rating = 0;

	constructor(
		public id: number,
		public title: string,
		public year: number
		){}

	rate(rating: number): void {
		this.rating = rating;
	}

}

function rate(theater: Theater, rating: number): void {
	theater.rating = rating;

}

const ironTheater = new Theater(1,'Iron Woman',2008);

rate(ironTheater,4);

console.log(ironTheater);

ironTheater.rate(35);

console.log(ironTheater);

class Copla extends Theater {
	type = 'German';
}

function show(theater: Theater){
	console.log('Now playing: ',theater.title);
}

const shining = new Copla(1,'The Shining',1980);


show(shining);


interface WithTitle {
	title: string;
}


function showAgain(withTitle: WithTitle){
	console.log('Showing again: ',withTitle.title);
}

// This exemplifies duck typing
showAgain(shining);

interface Opera {
	id: number,
	title: string,
	year: number,
	rating: number,
	rate(rating: number): void,
}


class ActionOpera implements Opera {
	public rating = 1;
	
	constructor(
		public id: number,
		public title: string,
		public year: number
		){}


	rate(rating: number){
		this.rating = rating;
	}

}


function showShow(opera: Opera){
	console.log('Showing opera with title',opera.title);
}


const infinityOpera = new ActionOpera(3,'La traviata',2025);


showShow(infinityOpera);


// generics example

class Collection<T> {
	
	private items: T[] = [];

	public add(item: T): void {
		this.items.push(item);
	}

	public getAll(): T[] {
		return this.items;
	}

}


const myOperas = new Collection<Opera>();

myOperas.add(infinityOpera);
console.log('Logging collection',myOperas);

console.log(multiply(2,10));

//if (age.isInteger()){
//	console.log('Right now I am an integer');
//}

