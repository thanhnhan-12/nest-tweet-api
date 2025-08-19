import { IsDate, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto {

    @IsString({ message: "First Name should be a string value." })
    @IsOptional()
    @MinLength(3, { message: "First Name should have a minimum of 3 characters." })
    @MaxLength(100)
    firstName?: string;

    @IsString({ message: "Last Name should be a string value." })
    @IsOptional()
    @MinLength(3, { message: "Last Name should have a minimum of 3 characters." })
    @MaxLength(100)
    lastName?: string;

    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender?: string;

    @IsOptional()
    @IsDate()
    dateOfBirth?: Date;

    @IsOptional()
    @IsDate()
    bio?: string;

    @IsOptional()
    @IsString()
    profileImage?: string;
}