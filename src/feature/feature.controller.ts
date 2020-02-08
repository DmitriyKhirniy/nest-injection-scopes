import { Controller, Get, Scope } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { Observable } from 'rxjs';

@Controller({
  path: 'api'
})
export class FeatureController {

  constructor(private readonly service: FeatureService) {
    console.log('time of Controller creation: ', new Date().toTimeString())
  }

  @Get('feature')
  getFeature(): Observable<string> {
    return this.service.getComplexData();
  }
}
