import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class OrdersEntity {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true })
  amountA: string;

  @Column({ nullable: true })
  amountB: string;

  @Column({ nullable: true })
  amountLeftToFill: string;

  @Column({ nullable: true })
  fees: string;

  @Column({ nullable: true })
  tokenA: string;

  @Column({ nullable: true })
  tokenB: string;

  @Column({ nullable: true })
  user: string;

  @Column({ nullable: true })
  bool: boolean;
}
