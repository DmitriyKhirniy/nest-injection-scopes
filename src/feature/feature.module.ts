import { Module, Scope } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { ConfigModule } from '@nestjs/config';
import { Feature2Service } from './feature-2.service';
import { CacheService } from '../core/cache.service';
import { RequestCacheService } from '../core/request-cache.service';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [
    {
      provide: CacheService,
      useClass: RequestCacheService,
      scope: Scope.TRANSIENT
    },
    FeatureService,
    Feature2Service
  ],
  controllers: [ FeatureController ]
})
export class FeatureModule {}
