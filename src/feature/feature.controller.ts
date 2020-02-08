import { Controller, Get, Scope } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { Observable, of } from 'rxjs';
import { CacheService } from '../core/cache.service';
import { Cacheable } from '../core/cacheable.decorator';

@Controller({
  path: 'api'
})
export class FeatureController {

  constructor(private readonly service: FeatureService, readonly cacheService: CacheService) {
    console.log('time of Controller creation: ', new Date().toTimeString())
  }

  @Get('feature')
  getFeature(): Observable<string> {
    return this.service.getComplexData();
  }


  @Get('feature1')
  @Cacheable('feature1')
  getNewFeature() {
    return of(Math.random());
  }
}
