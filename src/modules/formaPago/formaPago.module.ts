import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormaPagoController } from './controller/formaPago.controller';
import { FormaPagoEntity } from './entity/formaPago';
import { FormaPagoService } from './service/formaPago.service';

@Module({
  imports: [TypeOrmModule.forFeature([FormaPagoEntity])],
  controllers: [FormaPagoController],
  providers: [FormaPagoService],
})
export class FormaPagosModule {}