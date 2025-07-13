import { 
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	 } from '@nestjs/common';
import { InputMovie, Movie } from './movie.interface';
import { MovieService } from './movie.service';	 

@Controller('movie')
export class MovieController {

	constructor(private readonly movieService: MovieService){}

	private data = [
		{ id: 1, title: 'Iron Man', year: 2008 } ,
		{ id: 2, title: 'Thor', year:2010 },
		{ id: 3, title: 'Capt America', year: 2015}
	];


	@Get()
	getAllMovies(){
		return movieService.getAllMovies;
		//return this.data;
	}


	@Get(':id')
	getOneMovie(@Param('id') id: string){
		return movieService.getOneMovie(id);
		//return this.data.find((movie) => movie.id === parseInt(id,10));
	};


	@Delete(':id')
	@HttpCode(204)
	removeMovie(@Param('id') id: string) {
		return movieService.removeMovie(id);
		//this.data = this.data.filter((movie) => movie.id !== parseInt(id,10));
	}

	@Post()
	createNewMovie(@Body() movie: InputMovie){
		//const nextId = Math.max(...this.data.map((movie) => movie.id)) +1;
		//movie.id = nextId;
		//this.data.push(movie);
		//return movie;
		return movieService.createNewMovie(movie);
	}


	@Put(':id')
	updateMovie(@Param('id') id: string, @Body() movie: Movie){
		console.log('Updating',movie);
		//const index = this.data.findIndex((movie) => movie.id === parseInt(id,10));
		//this.data[index] = movie;
		return updateMovie(id,movie);
	}



}
