import { Injectable, Scope } from '@nestjs/common';
import { BaseFeatureService } from '../core/base-feature.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Cacheable } from '../core/cacheable.decorator';
import { CacheService } from '../core/cache.service';

@Injectable()
export class FeatureService extends BaseFeatureService {

  constructor(readonly cacheService: CacheService) {
    super();
    console.log('time of Service creation: ', new Date().toTimeString());
    this.name = 'My Interesting feature 1';
    this.value = 10000;
  }

  @Cacheable('featureKey')
  getComplexData(): Observable<string> {
    return of(this.getTitle()).pipe(delay(1000));
  }
}
