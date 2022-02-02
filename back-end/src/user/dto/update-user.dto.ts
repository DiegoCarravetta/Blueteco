/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  office: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email: string;
}