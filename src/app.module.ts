import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdditionalTextValueToken, TextValueToken } from './app.token';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: TextValueToken,
      useValue: 'Hello From Dima'
    },
    {
      provide: AdditionalTextValueToken,
      useValue: 'Another Message'
    },
    AppService
  ],
})
export class AppModule {}
