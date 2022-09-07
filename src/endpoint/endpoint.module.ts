import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/entity/orders.entity';
import { contractService } from 'utils/contract.service';
import { EndpointController } from './endpoint.controller';
import { EndpointService } from './endpoint.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  controllers: [EndpointController],
  providers: [EndpointService, contractService],
  exports: [TypeOrmModule],
})
export class EndpointModule {}
