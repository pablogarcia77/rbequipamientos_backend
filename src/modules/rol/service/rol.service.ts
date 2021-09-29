import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from '../entity/rol';

@Injectable()
export class RolService {

    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRP:Repository<RolEntity>
    ){}

    async saveRol(rol: any){
        await this.rolRP.insert(rol)
        return rol
    }

    async updateRol(id: number, rol: any){
        await this.rolRP.update(id,rol)
    }

    async findAll(){
        return await this.rolRP.find()
    }

    async findOnRol(id: number){
        return await this.rolRP.findOne(id)
    }

    async deleteRol(id: number){
        return await this.rolRP.delete(id)
    }

}
