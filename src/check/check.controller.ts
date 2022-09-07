import { Controller, Get } from '@nestjs/common';
import { CheckService } from './check.service';

@Controller('check')
export class CheckController {
  constructor(private readonly startService: CheckService) {}
  @Get('give')
  async starter(): Promise<any> {
    const user = await this.startService.starter();
    return user;
  }
}
