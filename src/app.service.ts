import { Inject, Injectable } from '@nestjs/common';
import { TokenValue } from './app.token';

@Injectable()
export class AppService {

  constructor(@Inject(TokenValue) private text: string,
              @Inject('INJECTION_TOKEN') private text2: string) {}

  getHello(): string {
    return `Text: ${this.text}:${this.text2}`;
  }
}
