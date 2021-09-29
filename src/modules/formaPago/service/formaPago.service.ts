import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormaPagoEntity } from '../entity/formaPago';

@Injectable()
export class FormaPagoService {

    constructor(
        @InjectRepository(FormaPagoEntity)
        private readonly formaPagoRP:Repository<FormaPagoEntity>
    ){}

    async saveFormaPago(fp: any){
        await this.formaPagoRP.insert(fp)
    }

    async updateFormaPago(id: number, fp: any){
        await this.formaPagoRP.update(id,fp)
    }

    async findAll(){
        return await this.formaPagoRP.find()
    }

    async findOneFormaPago(id: number){
        return await this.formaPagoRP.findOne(id)
    }

    async deleteFormaPago(id: number){
        return await this.formaPagoRP.delete(id)
    }
}
