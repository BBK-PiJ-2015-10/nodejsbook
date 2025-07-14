import { Injectable } from '@nestjs/common';
import { InputMovie, Movie } from './movie.interface';

@Injectable()
export class MovieService {

	private data: Movie[] = [
		{ id: 1, title: 'Iron Man', year: 2008 } ,
		{ id: 2, title: 'Thor', year:2010 },
		{ id: 3, title: 'Capt America', year: 2015}
	];


	getAllMovies(): Movie[]{
		return this.data;
	}


	getOneMovie(id: number): Movie | undefined {
		return this.data.find((movie) => movie.id === id);
	};


	
	removeMovie(id: number): void {
		this.data = this.data.filter((movie) => movie.id !== id);
	}

	
	createNewMovie(movie: InputMovie): Movie {
		const nextId = Math.max(...this.data.map((movie) => movie.id)) +1;
		const newMovie: Movie = {...movie, id: nextId};
		this.data.push(newMovie);
		return newMovie;
	}

	updateMovie(id: number, movie: Movie): Movie{
		console.log('Updating',movie);
		const index = this.data.findIndex((movie) => movie.id === id);
		this.data[index] = movie;
		return movie;
	}







}
