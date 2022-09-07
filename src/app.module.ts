import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web3Module } from 'nest-web3';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckModule } from './check/check.module';
import { EndpointModule } from './endpoint/endpoint.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),

    Web3Module.forRoot({
      name: 'eth',
      url: process.env.PROVIDER,
    }),
    CheckModule,
    EndpointModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
