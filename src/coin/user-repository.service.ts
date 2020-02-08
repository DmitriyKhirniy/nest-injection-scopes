import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryService {
  private readonly users = {
    'dkhir': {
      password: 'test',
      coins: ['XRP', 'BNB']
    }
  };

  findUser(userName: string) {
    return this.users[userName] || null;
  }
}
