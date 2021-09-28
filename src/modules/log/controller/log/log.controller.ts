import { Body, Controller, Post } from '@nestjs/common';
import { LogModel } from 'src/models/log.interface';
import { LogService } from '../../service/log/log.service';

@Controller('log')
export class LogController {

    constructor(
        private logService: LogService
    ){}

    @Post()
    addLog(@Body() logModel: LogModel):any{
        return this.logService.saveLog(logModel)
    }
}
