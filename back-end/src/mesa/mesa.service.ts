import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { User } from '@prisma/client';
import { ResponseCreateMesaDto } from './dto/response-create-mesa.dto';

@Injectable()
export class MesaService {
  constructor(private prismaService: PrismaService) {}

  async create(user: User, createMesaDto: CreateMesaDto) {
    const menuInfo = await this.prismaService.menu.findUnique({
      where: {
        id: createMesaDto.menu,
      },
    });

    if (!menuInfo) {
      throw new NotFoundException('Item não encontrado');
    }

    const createdMesa = await this.prismaService.mesa.create({
      data: {
        start: createMesaDto.start,
        end: createMesaDto.end,
        User: {
          connect: {
            id: user.id,
          },
        },
        Menu: {
          connect: {
            id: createMesaDto.menu,
          },
        },
      },
    });

    const responseCreateMesaDto: ResponseCreateMesaDto = {
      mesaId: createdMesa.id,
      userName: `${user.name}`,
      userEmail: `${user.email}`,
      mesaStart: createdMesa.mesaStart,
      mesaEnd: createdMesa.mesaEnd,
    };

    return { responseCreateMesaDto };
  }
}
