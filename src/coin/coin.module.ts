import { Module } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { UserRepositoryService } from './user-repository.service';

@Module({
  providers: [
    UserRepositoryService,
    CoinService
  ],
  controllers: [
    CoinController
  ]
})
export class CoinModule {}
