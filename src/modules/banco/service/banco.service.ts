import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BancoEntity } from '../entity/banco';

@Injectable()
export class BancoService {

    constructor(
        @InjectRepository(BancoEntity)
        private readonly bancoRP:Repository<BancoEntity>
    ){}

    async saveBanco(banco: any){
        await this.bancoRP.insert(banco)
        return banco
    }

    async updateBanco(id: number, banco: any){
        await this.bancoRP.update(id,banco)
    }

    async findAll(){
        return await this.bancoRP.find()
    }

    async findOneBanco(id: number){
        return await this.bancoRP.findOne(id)
    }

    async deleteBanco(id: number){
        return await this.bancoRP.delete(id)
    }
}
