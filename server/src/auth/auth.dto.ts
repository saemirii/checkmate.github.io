import { IsString, IsInt, IsEnum, IsMongoId, IsEmail } from "class-validator";

export class SignUpDto {
    @IsString()
    name: string

    @IsString()
    password: string

    @IsEmail()
    email: string
}

export class SignInDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    password: string
}