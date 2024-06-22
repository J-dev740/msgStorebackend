import { Controller,Get,Post,Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('api/message')
export class MessageController {
    // instatiation of message service to use it's methods inside the controller endpoints
    constructor(private readonly messageService:MessageService){}


     @Get()
    //  get method to get message from the contract 
     async getMessage(){
        const message= await this.messageService.getMessage();
        return {message};
     }

     @Post()
    //  set method 
    // only admin modifier specified in the smart contract 
     async setMessage(@Body('message') message:string){
        await this.messageService.setMessage(message);
        return {status:'success'};
     }
}
