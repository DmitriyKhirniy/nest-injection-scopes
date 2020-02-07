import { Injectable } from '@nestjs/common';
import { BaseFeatureService } from '../core/base-feature.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class FeatureService extends BaseFeatureService {

  constructor() {
    super();
    this.name = 'My Interesting feature 1';
    this.value = 10000;
  }

  getComplexData(): Observable<string> {
    return of(this.getTitle()).pipe(delay(1000));
  }
}
