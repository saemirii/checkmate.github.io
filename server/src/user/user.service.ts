import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  async createUser(dto: CreateUser) {
    return this.prisma.user.create({data: dto})
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }
}
