import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogEntity } from '../../entity/log-entity';

@Injectable()
export class LogService {

    constructor(
        @InjectRepository(LogEntity)
        private readonly logRP:Repository<LogEntity>
    ){}

    async saveLog(log: any){
        await this.logRP.insert(log)
        return log
    }

    async findAll(){
        return await this.logRP.find()
    }
}
