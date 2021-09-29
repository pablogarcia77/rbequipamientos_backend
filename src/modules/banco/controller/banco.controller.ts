import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BancoModel } from 'src/models/banco.interface';
import { BancoService } from '../service/banco.service';

@Controller('banco')
export class BancoController {

    constructor(
        private bancoService: BancoService
    ){}

    @Post()
    addBanco(@Body() bancoModel: BancoModel):any{
        return this.bancoService.saveBanco(bancoModel)
    }

    @Get()
    getBancos():any{
        return this.bancoService.findAll()
    }

    @Get(':id')
    getBancoById(@Param() params):any{
        return this.bancoService.findOneBanco(params.id)
    }

    @Put(':id')
    updateBanco(@Body() bancoModel: BancoModel,@Param() params){
        return this.bancoService.updateBanco(params.id,bancoModel)
    }

    @Delete(':id')
    deleteBanco(@Param() params):any{
        return this.bancoService.deleteBanco(params.id)
    }
}
