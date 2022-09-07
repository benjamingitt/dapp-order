import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/entity/orders.entity';
import { contractService } from 'utils/contract.service';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  controllers: [CheckController],
  providers: [CheckService, contractService],
  exports: [TypeOrmModule],
})
export class CheckModule {}
