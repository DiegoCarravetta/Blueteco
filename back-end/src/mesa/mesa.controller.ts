import { Controller } from '@nestjs/common';
import { MesaService } from './mesa.service';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}
}
