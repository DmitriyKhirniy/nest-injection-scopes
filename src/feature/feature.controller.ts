import { Controller, Get } from '@nestjs/common';
import { FeatureService } from './feature.service';

@Controller('api')
export class FeatureController {

  constructor(private readonly service: FeatureService) {}

  @Get('feature')
  getFeature(): string {
    return this.service.getComplexData();
  }
}
