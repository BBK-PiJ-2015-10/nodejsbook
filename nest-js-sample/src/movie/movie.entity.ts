import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('movie')
export class Movie {

	@PrimaryGeneratedColumn()
	id :number;

	@Column()
	title: string;

	@Column()
	year: number;

}
