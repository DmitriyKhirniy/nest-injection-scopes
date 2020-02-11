import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenValue } from './app.token';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: TokenValue,
      useValue: 'Hello From Dima'
    },
    AppService
  ],
})
export class AppModule {}
