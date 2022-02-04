/* eslint-disable prettier/prettier */
import { IsDateString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMesaDto {
  [x: string]: any;
  @IsNumber()
  @ApiProperty()
  table: number;

  @IsNumber()
  @ApiProperty()
  places: number;

  @IsDateString()
  @ApiProperty()
  start: Date;

  @IsDateString()
  @ApiProperty()
  end: Date;
}
