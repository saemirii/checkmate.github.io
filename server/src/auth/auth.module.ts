import { Module } from "@nestjs/common";
import {JwtModule} from '@nestjs/jwt'
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: "jwtSecret",
            signOptions: { expiresIn: '300s' }
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}