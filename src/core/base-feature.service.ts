import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseFeatureService {
  
  protected value: number;
  
  protected name: string;
  
  protected getFeatureValue1(): number {
    return 1;
  }
  
  protected getValue(): number {
    return this.value;
  }
  
  protected getTitle(): string {
    return `${this.name} is ${this.value}`
  }
}