import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Menu, User } from '@prisma/client';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateMenuDto } from './dto/update-menu.dto';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um item no menu',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(
    @Body() createMenuDto: CreateMenuDto,
    @LoggedUser() user: User,
  ): Promise<Menu> {
    return this.menuService.create(createMenuDto, user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar menu',
  })
  findMany(): Promise<Menu[]> {
    return this.menuService.findMany();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar item',
  })
  findUnique(): Promise<Menu> {
    return this.menuService.findUnique();
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar item',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  update(@Body() updateMenuDto: UpdateMenuDto): Promise<Menu> {
    return this.menuService.update(menu.id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar item',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  delete(@LoggedUser() menu: Menu) {
    return this.menuService.delete(menu.id);
  }
}
