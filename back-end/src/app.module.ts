import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { MesaModule } from './mesa/mesa.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MenuModule, MesaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
