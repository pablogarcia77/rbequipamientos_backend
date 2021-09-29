import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BancoController } from './controller/banco.controller';
import { BancoEntity } from './entity/banco';
import { BancoService } from './service/banco.service';

@Module({
  imports: [TypeOrmModule.forFeature([BancoEntity])],
  controllers: [BancoController],
  providers: [BancoService],
})
export class BancosModule {}