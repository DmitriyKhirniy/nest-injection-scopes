import { Injectable } from '@nestjs/common';
import { BaseFeatureService } from '../core/base-feature.service';

@Injectable()
export class FeatureService extends BaseFeatureService {

  constructor() {
    super();
    this.name = 'My Interesting feature 1';
    this.value = 10000;
  }

  getComplexData(): string {
    return this.getTitle();
  }
}
