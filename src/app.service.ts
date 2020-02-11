import { Inject, Injectable } from '@nestjs/common';
import { TokenValue } from './app.token';

@Injectable()
export class AppService {

  constructor(@Inject(TokenValue) private text: string) {
    //@Inject(Symbol('INJECTION_TOKEN')) private text: string
    console.log('IS equals: ',TokenValue === Symbol('INJECTION_TOKEN'));
  }

  getHello(): string {
    return `Text: ${this.text}`;
  }
}
