import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from 'nest-web3';
import { OrdersEntity } from 'src/entity/orders.entity';
import { Repository } from 'typeorm';
import { contractService } from 'utils/contract.service';

@Injectable()
export class EndpointService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
    private contractService: contractService,
  ) {}

  async orderList(): Promise<any> {
    const orders = await this.ordersRepository.find();
    const arrOrders = [];
    orders.some((tokenA) => {
      orders.some((tokenB) => {
        if (
          tokenA.tokenA == tokenB.tokenB &&
          tokenA.tokenB == tokenB.tokenA &&
          tokenA.amountA == tokenB.amountB &&
          tokenA.amountB == tokenB.amountA
        ) {
          arrOrders.push({ token1: tokenA, token2: tokenB });
          return true;
        }
      });
    });

    return arrOrders;
  }

  async orderMatch(match: any): Promise<string> {
    const dbMatch = await this.ordersRepository.findOne({
      id: match.id1,
    });
    Object.assign(match, dbMatch);
    return this.contractService.orderMatch(match);
  }
}
