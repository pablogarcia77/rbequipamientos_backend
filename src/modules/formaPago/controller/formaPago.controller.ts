import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FormaPagoModel } from 'src/models/formaPago.interface';
import { FormaPagoService } from '../service/formaPago.service';

@Controller('formaPago')
export class FormaPagoController {

    constructor(
        private formaPagoService: FormaPagoService
    ){}

    @Post()
    addFormaPago(@Body() formaPagoModel: FormaPagoModel){
        return this.formaPagoService.saveFormaPago(formaPagoModel)
    }

    @Get()
    getFormaPago():any{
        return this.formaPagoService.findAll()
    }

    @Get(':id')
    getFormaPagoById(@Param() params):any{
        return this.formaPagoService.findOneFormaPago(params.id)
    }

    @Put(':id')
    updateFormaPago(@Body() formaPagoModel: FormaPagoModel,@Param() params){
        return this.formaPagoService.updateFormaPago(params.id,formaPagoModel)
    }

    @Delete(':id')
    deleteFormaPago(@Param() params):any{
        return this.formaPagoService.deleteFormaPago(params.id)
    }
}
