import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { MesaModule } from './mesa/mesa.module';

@Module({
  imports: [UserModule, MenuModule, MesaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
