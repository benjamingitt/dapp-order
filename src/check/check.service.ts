import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/entity/orders.entity';
import { Repository } from 'typeorm';
import { contractService } from 'utils/contract.service';

@Injectable()
export class CheckService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
    private contractService: contractService,
  ) {}
  async starter() {
    const lengthOrder = await this.contractService.getOrderIdLength();
    for (let i = 0; i <= lengthOrder; i += 1) {
      const orderId = await this.contractService.getOrderId(i);
      this.orderInfo(orderId);
    }
  }

  async orderInfo(id) {
    const OrderInfo = await this.contractService.getOrderInfo(id);
    const forDb = {
      id: OrderInfo[0],
      amountA: OrderInfo[1],
      amountB: OrderInfo[2],
      amountLeftToFill: OrderInfo[3],
      fees: OrderInfo[4],
      tokenA: OrderInfo[5],
      tokenB: OrderInfo[6],
      user: OrderInfo[7],
      bool: OrderInfo[8],
    };
    const result = await this.ordersRepository.save(forDb);
  }
}
