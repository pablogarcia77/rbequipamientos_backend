import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from './controller/rol.controller';
import { RolEntity } from './entity/rol';
import { RolService } from './service/rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}