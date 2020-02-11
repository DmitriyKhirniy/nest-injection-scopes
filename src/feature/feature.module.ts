import { Module, Scope } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { ConfigModule } from '@nestjs/config';
import { Feature2Service } from './feature-2.service';
class CacheManager {}
@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [
    {
      provide: 'CACHE_MANAGER',
      useClass: CacheManager,
      scope: Scope.DEFAULT,
    },
    {
      provide: 'CACHE_MANAGER',
      useClass: CacheManager,
    },
    FeatureService, Feature2Service
  ],
  controllers: [ FeatureController ]
})
export class FeatureModule {}
