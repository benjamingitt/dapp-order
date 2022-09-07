import { Injectable } from '@nestjs/common';
import { Web3Service } from 'nest-web3';
import * as fs from 'fs';
import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';

@Injectable()
export class contractService {
  private Contract: any;

  constructor(private readonly web3Service: Web3Service) {
    const abiJson = fs.readFileSync('./utils/abi/MyContract.json', 'utf-8');
    const CONTRACT_ABI = JSON.parse(abiJson);
    const provider = new HDWalletProvider(process.env.SECRET_KEY, process.env.PROVIDER);
    const web3 = new Web3(provider);
    this.Contract = new web3.eth.Contract(CONTRACT_ABI, process.env.ORDER_ADRESS);
  }
  async getOrderIdLength(): Promise<any> {
    try {
      return await this.Contract.methods.getOrderIdLength().call();
    } catch (e) {
      console.log('err', e);
      return e;
    }
  }

  async getOrderInfo(id: string): Promise<any> {
    try {
      return await this.Contract.methods.getOrderInfo(id).call();
    } catch (e) {
      console.log('err', e);
      return e;
    }
  }

  async getOrderId(id: number): Promise<any> {
    try {
      return await this.Contract.methods.getOrderId(id).call();
    } catch (e) {
      console.log('err', e);
      return e;
    }
  }

  async orderMatch(match: any): Promise<string> {
    console.log(match);
    try {
      const matchOrder = await this.Contract.methods
        .matchOrders([match.id2], match.tokenA, match.tokenB, match.amountA, match.amountB, false)
        .call();
      console.log(matchOrder);
      return matchOrder;
    } catch (e) {
      console.log('err', e);
      return e;
    }
  }
}
