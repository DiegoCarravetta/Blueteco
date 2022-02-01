import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UsersDto } from './dto/users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findMany(): Promise<UsersDto[]> {
    return this.userService.findMany();
  }

  @Get(':id')
  findUnique(@Param('id') userId: string): Promise<User> {
    return this.userService.findUnique(userId);
  }
}
