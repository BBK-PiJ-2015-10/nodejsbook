import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {

constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		private jwtService: JwtService
		){}

async validateUser(username: string, password: string): Promise<Omit<User,'password'> | null> {
	const user = await this.userRepository.findOne({ where: { username, password }});
	if (user){
		const validatedUser = { ...user } as Partial<User>;
      	delete validatedUser.password; // Ensure `password` is optional before deleting
      	return validatedUser as Omit<User, 'password'>;
	}
	return null; 
}

async login(user: User){
	const payload = { username: user.username, sub: user.id};
	return {
		access_token: this.jwtService.sign(payload),
	};
}


}
