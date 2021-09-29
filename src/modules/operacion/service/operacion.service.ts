import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperacionEntity } from '../entity/operacion';

@Injectable()
export class OperacionService {

    constructor(
        @InjectRepository(OperacionEntity)
        private readonly operacionRP:Repository<OperacionEntity>
    ){}

    async saveOperacion(operacion: any){
        await this.operacionRP.insert(operacion)
    }

    async updateOperacion(id: number, operacion: any){
        await this.operacionRP.update(id,operacion)
    }

    async findAll(){
        return await this.operacionRP.find()
    }

    async findOneOperacion(id: number){
        return await this.operacionRP.findOne(id)
    }

    async deleteOperacion(id: number){
        return await this.operacionRP.delete(id)
    }
}
