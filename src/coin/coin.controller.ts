import { Body, Controller, Get, Inject, Post, Req, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserRepositoryService } from './user-repository.service';

@Controller({
  path: 'api',
  scope: Scope.REQUEST
})
export class CoinController {
  private readonly user: any;
  constructor(@Inject(REQUEST) private readonly request: Request,
              private readonly repository: UserRepositoryService) {
    this.user = this.repository.findUser(this.request.header('username'));
    console.log('creating contoller: ');
  }

  @Get('coins')
  getCoins() {
    // console.log('sdfsdf: ', this.request);
    return this.user.coins;
  }

  @Post('coins')
  getAnotherCoins(@Body() body, @Req() req: Request) {
    // console.log('body: ', body);
    // console.log('req: ', req === this.request);
    if (this.user) {
      this.user.coins = body.coins;
    }
    return this.user;
  }
}
