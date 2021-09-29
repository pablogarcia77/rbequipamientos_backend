import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovimientoModel } from 'src/models/movimiento.interface';
import { MovimientoService } from '../service/movimiento.service';

@Controller('movimiento')
export class MovimientoController {

    constructor(
        private movimientoService: MovimientoService
    ){}

    @Post()
    addMovimiento(@Body() movimientoModel: MovimientoModel):any{
        return this.movimientoService.saveMovimiento(movimientoModel)
    }

    @Get()
    getMovimiento():any{
        return this.movimientoService.findAll()
    }

    @Get(':id')
    getMovimientoById(@Param() params):any{
        return this.movimientoService.findOnMovimiento(params.id)
    }

    @Put(':id')
    updateMovimiento(@Body() movimientoModel: MovimientoModel, @Param() params){
        return this.movimientoService.updateMovimiento(params.id,movimientoModel)
    }

    @Delete(':id')
    deleteMovimiento(@Param() params):any{
        return this.movimientoService.deleteMovimiento(params.id)
    }
}
