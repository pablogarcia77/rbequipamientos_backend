import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoEntity } from './entity/movimiento';
import { MovimientoController } from './controller/movimiento.controller';
import { MovimientoService } from './service/movimiento.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoEntity])],
  controllers: [MovimientoController],
  providers: [MovimientoService],
})
export class MovimientosModule {}