import { Inject, Injectable, Optional } from '@nestjs/common';
import { AdditionalTextValueToken, TextValueToken } from './app.token';

@Injectable()
export class AppService {

  constructor(@Inject(TextValueToken) private readonly text: string,
              @Inject(AdditionalTextValueToken) @Optional() private readonly anotherText: string) {}

  getHello(): string {
    return `Text: ${this.text} ${this.anotherText}`;
  }
}
