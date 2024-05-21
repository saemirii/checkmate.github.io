import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
    
    async canActivate (context: ExecutionContext) {
        console.log('dfdf')
        const request = context.switchToHttp().getRequest();
        const token =  this.extractToekenFromHeader(request);
        if(!token){
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                  secret: "8F2A5E7B3CDE9AF1854D670BA3F1C2E0za   "
                }
              );
              request['user'] = payload;
        } catch{
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractToekenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token: undefined;
    }
}