import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello you are learning nest js with codingwithsaleem';
  }
}
