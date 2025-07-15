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
import { InputMovie } from './movie.interface';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';	 

@Controller('movie')
export class MovieController {

	constructor(private readonly movieService: MovieService){}



	@Get()
	getAllMovies(): Promise<Movie[]> {
		return this.movieService.getAllMovies();
	}


	@Get(':id')
	getOneMovie(@Param('id') id: string): Promise<Movie | null> {
		return this.movieService.getOneMovie(parseInt(id,10));
	};


	@Delete(':id')
	@HttpCode(204)
	removeMovie(@Param('id') id: string): void {
		this.movieService.removeMovie(parseInt(id,10));
	}

	@Post()
	createNewMovie(@Body() movie: InputMovie): Promise<Movie> {
		return this.movieService.createNewMovie(movie);
	}


	@Put(':id')
	updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
		console.log('Updating',movie);
		return this.movieService.updateMovie(parseInt(id,10),movie);
	}



}
