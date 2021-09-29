import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperacionController } from './controller/operacion.controller';
import { OperacionEntity } from './entity/operacion';
import { OperacionService } from './service/operacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([OperacionEntity])],
  controllers: [OperacionController],
  providers: [OperacionService],
})
export class OperacionesModule {}