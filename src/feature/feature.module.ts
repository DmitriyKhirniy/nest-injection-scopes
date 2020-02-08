import { Module } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { ConfigModule } from '@nestjs/config';
import { Feature2Service } from './feature-2.service';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [ FeatureService, Feature2Service ],
  controllers: [ FeatureController ]
})
export class FeatureModule {}
