import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('mesa')
@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar reserva',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(@LoggedUser() user: User, @Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(user, createMesaDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar mesa',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  delete(@LoggedUser() mesa: Mesa) {
    return this.mesaService.delete(mesa.id);
  }
}
