import { Injectable } from '@nestjs/common';
import { FeatureService } from './feature.service';

@Injectable()
export class Feature2Service {
  constructor(private readonly featureService: FeatureService) {
    // console.log('time of Service 2 creation: ', new Date().toTimeString())
  }

  getData() {
    return `${this.featureService.getComplexData()}__additional`;
  }
}
