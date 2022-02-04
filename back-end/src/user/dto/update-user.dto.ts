/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  office: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  email: string;
}