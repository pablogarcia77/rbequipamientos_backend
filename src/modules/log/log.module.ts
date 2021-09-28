import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogEntity } from './entity/log-entity';
import { LogController } from './controller/log.controller';
import { LogService } from './service/log/log.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity])],
  controllers: [LogController],
  providers: [LogService],
})
export class LogsModule {}