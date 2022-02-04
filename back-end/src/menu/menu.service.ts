import { Injectable } from '@nestjs/common';
import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prismaService: PrismaService) {}

  async create(createMenuDto: CreateMenuDto, userId: string): Promise<Menu> {
    const createdMenu = await this.prismaService.menu.create({
      data: {
        name: createMenuDto.name,
        price: createMenuDto.price,
        description: createMenuDto.description,
        imageUrl: createMenuDto.imageUrl,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return createdMenu;
  }

  async findMany(): Promise<Menu[]> {
    const menu = await this.prismaService.menu.findMany();
    return menu;
  }
}
