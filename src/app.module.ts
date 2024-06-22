import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';

@Module({
  imports: [],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
