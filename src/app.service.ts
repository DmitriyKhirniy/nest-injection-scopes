import { Inject, Injectable } from '@nestjs/common';
import { TextValue } from './app.token';

@Injectable()
export class AppService {

  constructor(@Inject(TextValue) private text: string) {}

  getHello(): string {
    return `Text: ${this.text}`;
  }
}
