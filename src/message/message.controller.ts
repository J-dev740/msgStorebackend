import { Controller,Get,Post,Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('api/message')
export class MessageController {
    constructor(private readonly messageService:MessageService){}


     @Get()
     async getMessage(){
        const message= await this.messageService.getMessage();
        return {message};
     }

     @Post()
     async setMessage(@Body('message') message:string){
        await this.messageService.setMessage(message);
        return {status:'success'};
     }
}
