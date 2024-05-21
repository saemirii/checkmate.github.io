import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto, SignUpDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor (
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async signIn(dto: SignInDto) {
        const user = await this.userService.findUserByEmail(dto.email);
        if (!user) {
            throw new NotFoundException('Invalid Credentials!')
          }
          const isPasswordCorrect = await bcrypt.compare(dto.password, user.password);
          if(!isPasswordCorrect){
            throw new BadRequestException('Invalid Credentials!')
          } 
          return this.generateGToken(user);
    }
    async signUp(dto: SignUpDto) {
        const user = await this.userService.findUserByEmail(dto.email);
        if(user){
            throw new BadRequestException('User with this email already exists!')
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const newUser = await this.userService.createUser({...dto, password: hashedPassword});
        return this.generateGToken(newUser);
    }

    private async generateGToken(user: {id: string, email: string}) {
        const payload = { sub: user.id, email: user.email };
        
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async verifyToken(token: string) {
        return this.jwtService.verifyAsync(token);
    }
}
