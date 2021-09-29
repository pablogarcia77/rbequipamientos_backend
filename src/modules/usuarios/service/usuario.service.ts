import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../entity/usuario-entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRP:Repository<UsuarioEntity>
    ){}

    async saveUsuario(usuario: any){
        await this.usuarioRP.insert(usuario)
        return usuario
    }

    async updateUsuario(id: number, usuario: any){
        await this.usuarioRP.update(id,usuario)
    }

    async findAll(){
        return await this.usuarioRP.find()
    }

    async findOnUsuario(id: number){
        return await this.usuarioRP.findOne(id)
    }

    async deleteUsuario(id: number){
        return await this.usuarioRP.delete(id)
    }

    async loginUser(usuario: any){
        let username = usuario.username
        let password = usuario.password
        const response = await this.usuarioRP.findOne({ where: { username: username, password: password } })
        return response ? response : false
    }
}
