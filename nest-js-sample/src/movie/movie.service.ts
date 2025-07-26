import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { InputMovie } from './movie.interface';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  getOneMovie(id: number): Promise<Movie | null> {
    return this.movieRepository.findOne({ where: { id } });
  }

  removeMovie(id: number): Promise<DeleteResult> {
    return this.movieRepository.delete(id);
  }

  createNewMovie(movie: InputMovie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  updateMovie(id: number, movie: Movie): Promise<Movie> {
    this.movieRepository.update(id, movie).then(() => {
      movie;
    });
    return Promise.resolve(movie);
  }
}
