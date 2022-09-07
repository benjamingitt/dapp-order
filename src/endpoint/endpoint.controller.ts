import { Body, Controller, Get, Post } from '@nestjs/common';
import { EndpointService } from './endpoint.service';

@Controller('endpoint')
export class EndpointController {
  constructor(private readonly orderListService: EndpointService) {}

  @Get('order-list')
  async orderList(): Promise<any> {
    const user = await this.orderListService.orderList();
    return user;
  }

  @Post('order-match')
  async orderMatch(@Body('match') match: any): Promise<any> {
    return await this.orderListService.orderMatch(match);
  }
}
