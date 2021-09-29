import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LogEntity } from '../log/entity/log-entity';
import { LogsModule } from '../log/log.module';
import { MovimientoEntity } from '../movimiento/entity/movimiento';
import { MovimientosModule } from '../movimiento/movimiento.module';
import { RolEntity } from '../rol/entity/rol';
import { RolModule } from '../rol/rol.module';
import { FormaPagoEntity } from '../formaPago/entity/formaPago';
import { FormaPagosModule } from '../formaPago/formaPago.module';
import { UsuarioEntity } from '../usuarios/entity/usuario-entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { BancoEntity } from '../banco/entity/banco';
import { BancosModule } from '../banco/banco.module';
import { OperacionEntity } from '../operacion/entity/operacion';
import { OperacionesModule } from '../operacion/rol.module';

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
                UsuarioEntity,
                LogEntity,
                RolEntity,
                MovimientoEntity,
                FormaPagoEntity,
                BancoEntity,
                OperacionEntity
            ],
            synchronize: true,
          }),
          UsuariosModule,
          LogsModule,
          RolModule,
          MovimientosModule,
          FormaPagosModule,
          BancosModule,
          OperacionesModule
    ],
    providers: [],
    exports: [DatabaseModule]
})
export class DatabaseModule {
    constructor( private readonly connection: Connection){}
}
