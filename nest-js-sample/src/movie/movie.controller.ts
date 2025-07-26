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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InputMovie } from './movie.interface';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@ApiTags('movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({ description: 'All available movies' })
  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @ApiOkResponse({ description: 'The movie based on the id provided' })
  @Get(':id')
  getOneMovie(@Param('id') id: string): Promise<Movie | null> {
    return this.movieService.getOneMovie(parseInt(id, 10));
  }

  @ApiOkResponse({ description: 'Nothing' })
  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string): void {
    this.movieService.removeMovie(parseInt(id, 10));
  }

  @ApiOkResponse({ description: 'The newly created movie' })
  @Post()
  createNewMovie(@Body() movie: InputMovie): Promise<Movie> {
    return this.movieService.createNewMovie(movie);
  }

  @ApiOkResponse({ description: 'The updated movie' })
  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
    console.log('Updating', movie);
    return this.movieService.updateMovie(parseInt(id, 10), movie);
  }
}
