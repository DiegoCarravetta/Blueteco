/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsDate } from 'class-validator';

export class UsersDto {
  id: string;
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  office: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}