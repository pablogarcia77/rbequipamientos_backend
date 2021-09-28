import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.interface';
import { UsuarioService } from '../../service/usuario/usuario.service';

@Controller('login')
export class LoginController {

    constructor(
        private usuarioService: UsuarioService
    ){}

    @Post()
    login(@Body() usuarioModel: UsuarioModel):any{
        return this.usuarioService.loginUser(usuarioModel)
    }
}
