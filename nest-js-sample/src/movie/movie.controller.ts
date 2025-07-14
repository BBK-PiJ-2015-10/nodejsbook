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



	@Get()
	getAllMovies(): Movie[]{
		return this.movieService.getAllMovies();
		//return this.data;
	}


	@Get(':id')
	getOneMovie(@Param('id') id: string): Movie | undefined {
		return this.movieService.getOneMovie(parseInt(id,10));
		//return this.data.find((movie) => movie.id === parseInt(id,10));
	};


	@Delete(':id')
	@HttpCode(204)
	removeMovie(@Param('id') id: string): void {
		return this.movieService.removeMovie(parseInt(id,10));
		//this.data = this.data.filter((movie) => movie.id !== parseInt(id,10));
	}

	@Post()
	createNewMovie(@Body() movie: InputMovie): Movie {
		//const nextId = Math.max(...this.data.map((movie) => movie.id)) +1;
		//movie.id = nextId;
		//this.data.push(movie);
		//return movie;
		return this.movieService.createNewMovie(movie);
	}


	@Put(':id')
	updateMovie(@Param('id') id: string, @Body() movie: Movie): Movie {
		console.log('Updating',movie);
		//const index = this.data.findIndex((movie) => movie.id === parseInt(id,10));
		//this.data[index] = movie;
		return this.movieService.updateMovie(parseInt(id,10),movie);
	}



}
