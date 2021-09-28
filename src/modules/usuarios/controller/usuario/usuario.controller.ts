import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.interface';
import { UsuarioService } from '../../service/usuario/usuario.service';

@Controller('usuarios')
export class UsuarioController {
    
    constructor(
        private usuarioService: UsuarioService
    ){}

    @Post()
    addUsuario(@Body() usuarioModel: UsuarioModel):any{
        return this.usuarioService.saveUsuario(usuarioModel)
    }

    @Get()
    getUsuarios():any{
        return this.usuarioService.findAll()
    }

    @Get(':id')
    getUsuarioById(@Param() params):any{
        return this.usuarioService.findOnUsuario(params.id)
    }

    @Put(':id')
    updateUsuario(@Body() usuarioModel: UsuarioModel, @Param() params):any{
        return this.usuarioService.updateUsuario(params.id,usuarioModel)
    }
    
    @Delete(':id')
    deleteUsuario(@Param() params):any{
        return this.usuarioService.deleteUsuario(params.id)
    }

}
