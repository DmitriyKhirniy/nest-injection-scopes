import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextValue } from './app.token';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: TextValue,
      useValue: 'Hello From Dima'
    },
    AppService
  ],
})
export class AppModule {}
