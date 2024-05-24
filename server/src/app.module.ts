import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), UserModule, AuthModule, TaskModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
