import { IsString, IsInt, IsEnum, IsMongoId, IsEmail } from "class-validator";

export class CreateUser {
    @IsString()
    name: string

    @IsString()
    password: string

    @IsEmail()
    email: string
}