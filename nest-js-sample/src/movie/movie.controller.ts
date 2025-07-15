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
	};


	@Delete(':id')
	@HttpCode(204)
	removeMovie(@Param('id') id: string): void {
		return this.movieService.removeMovie(parseInt(id,10));
		//this.data = this.data.filter((movie) => movie.id !== parseInt(id,10));
	}

	@Post()
	createNewMovie(@Body() movie: InputMovie): Movie {
		return this.movieService.createNewMovie(movie);
	}


	@Put(':id')
	updateMovie(@Param('id') id: string, @Body() movie: Movie): Movie {
		console.log('Updating',movie);
		return this.movieService.updateMovie(parseInt(id,10),movie);
	}



}
