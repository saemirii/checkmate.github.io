import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt';
import { UserService } from "src/user/user.service";
import { JwtPayload } from "../auth.types";
// import { SanitizedUser } from "src/user/user.types";
import { sanitizeUser } from "src/utils";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userService: UserService
    ) {
        super ({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        }) 
    }

   

    async validate(payload: JwtPayload) {
        const user = await this.userService.findUserById(payload.sub)
        if (!user) {
          throw new UnauthorizedException('Unauthorized User!')
        }
    
        return sanitizeUser(user)
      }

}