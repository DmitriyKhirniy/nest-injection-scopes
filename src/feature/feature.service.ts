import { Injectable, Scope } from '@nestjs/common';
import { BaseFeatureService } from '../core/base-feature.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ scope: Scope.REQUEST })
export class FeatureService extends BaseFeatureService {

  private items = new Array(100000);

  constructor() {
    super();
    // console.log('time of Service creation: ', new Date().toTimeString())
    this.name = 'My Interesting feature 1';
    this.value = 10000;
    for (let i = 0;i<100000;i++) {
      this.items.push(i)
    }
  }

  getComplexData(): Observable<string> {
    return of(this.getTitle()).pipe(delay(1000));
  }
}
