import { Injectable } from '@nestjs/common';
import { BaseFeatureService } from '../core/base-feature.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FeatureService extends BaseFeatureService {

  constructor(configService: ConfigService) {
    super(configService);
    this.name = 'My Interesting feature 1';
    this.value = 10000;
  }

  getComplexData(): string {
    return this.getTitle();
  }
}
