import { Controller, Get } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { Observable } from 'rxjs';

@Controller('api')
export class FeatureController {

  constructor(private readonly service: FeatureService) {}

  @Get('feature')
  getFeature(): Observable<string> {
    return this.service.getComplexData();
  }
}
