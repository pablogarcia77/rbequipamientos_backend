import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { UsuarioController } from './modules/usuarios/controller/usuario/usuario.controller';
import { UsuarioEntity } from './modules/usuarios/entity/usuario-entity';
import { UsuarioService } from './modules/usuarios/service/usuario/usuario.service';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
