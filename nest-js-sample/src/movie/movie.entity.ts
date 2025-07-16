import { ApiProperty} from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('movie')
export class Movie {

	@ApiProperty({
		description: 'Id of the movie',
		example: 1
	})
	@PrimaryGeneratedColumn()
	id :number;


	@ApiProperty({
		description: 'Title of the movie',
		example: 'Robin Hood'
	})
	@Column()
	title: string;

	@ApiProperty({
		description: 'year of the movie',
		example: 2025
	})
	@Column()
	year: number;

}
