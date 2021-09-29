import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoEntity } from '../entity/movimiento';

@Injectable()
export class MovimientoService {

    constructor(
        @InjectRepository(MovimientoEntity)
        private readonly movimientoRP:Repository<MovimientoEntity>
    ){}

    async saveMovimiento(movimiento: any){
        await this.movimientoRP.insert(movimiento)
        return movimiento
    }

    async updateMovimiento(id: number, movimiento: any){
        await this.movimientoRP.update(id,movimiento)
    }

    async findAll(){
        return await this.movimientoRP.find()
    }

    async findOnMovimiento(id: number){
        return await this.movimientoRP.findOne(id)
    }

    async deleteMovimiento(id: number){
        return await this.movimientoRP.delete(id)
    }
}
