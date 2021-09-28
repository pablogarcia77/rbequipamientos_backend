import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario/usuario.service';
import { UsuarioController } from './controller/usuario/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entity/usuario-entity';
import { LoginController } from './controller/login/login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController, LoginController],
  providers: [UsuarioService],
})
export class UsuariosModule {}
