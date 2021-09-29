import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OperacionModel } from 'src/models/operacion.interface';
import { OperacionService } from '../service/operacion.service';

@Controller('operacion')
export class OperacionController {

    constructor(
        private operacionService: OperacionService
    ){}

    @Post()
    addOperacion(@Body() operacionModel: OperacionModel){
        return this.operacionService.saveOperacion(operacionModel)
    }

    @Get()
    getOperaciones():any{
        return this.operacionService.findAll()
    }

    @Get(':id')
    getOperacionById(@Param() params):any{
        return this.operacionService.findOneOperacion(params.id)
    }

    @Put(':id')
    updateOperacion(@Body() operacionModel, @Param() params){
        return this.operacionService.updateOperacion(params.id,operacionModel)
    }

    @Delete(':id')
    deleteOperacion(@Param() params){
        return this.operacionService.deleteOperacion(params.id)
    }
}
