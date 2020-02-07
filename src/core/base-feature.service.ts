import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class BaseFeatureService {

  @Inject(ConfigService)
  protected readonly configService: ConfigService;
  
  protected value: number;
  
  protected name: string;
  
  protected getFeatureValue1(): number {
    return 1;
  }
  
  protected getValue(): number {
    return this.value;
  }
  
  protected getTitle(): string {
    return `${this.name} is ${this.value} : ${this.configService.get('interestingProperty', 'defaultProperty')}`
  }
}
