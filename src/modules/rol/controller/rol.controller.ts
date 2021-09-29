import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolModel } from 'src/models/rol.interface';
import { RolService } from '../service/rol.service';

@Controller('rol')
export class RolController {

    constructor(
        private rolService: RolService
    ){}

    @Post()
    addRol(@Body() rolModel: RolModel):any{
        return this.rolService.saveRol(rolModel)
    }

    @Get()
    getRoles():any{
        return this.rolService.findAll()
    }

    @Get(':id')
    getRolById(@Param() params):any{
        return this.rolService.findOnRol(params.id)
    }

    @Put('id')
    updateRol(@Body() rolModel: RolModel, @Param() params){
        return this.rolService.updateRol(params.id,rolModel)
    }

    @Delete('id')
    deleteRol(@Param() params):any{
        return this.rolService.deleteRol(params.id)
    }

}
