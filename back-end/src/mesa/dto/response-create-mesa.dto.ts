/* eslint-disable prettier/prettier */
import {
  IsString,
  IsEmail,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class ResponseCreateMesaDto {
  @IsString()
  @IsNotEmpty()
  mesaId: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  @IsDateString()
  @IsNotEmpty()
  mesaStart: Date;

  @IsDateString()
  @IsNotEmpty()
  mesaEnd: Date;
}