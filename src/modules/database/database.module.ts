import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsuarioEntity } from '../usuarios/entity/usuario-entity';
import { UsuarioService } from '../usuarios/service/usuario/usuario.service';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rbequipamientos',
            database: 'rbequipamientos',
            entities: [
                UsuarioEntity
            ],
            synchronize: true,
          }),
          UsuariosModule
    ],
    providers: [],
    exports: [DatabaseModule]
})
export class DatabaseModule {
    constructor( private readonly connection: Connection){}
}