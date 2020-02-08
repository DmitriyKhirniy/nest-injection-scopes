import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureModule } from './feature/feature.module';

import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';

@Module({
  imports: [
    FeatureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // IMPORTANT! Call Middleware.configure BEFORE using it for routes
    consumer.apply(ResponseTimeMiddleware).forRoutes('api');
  }
}
