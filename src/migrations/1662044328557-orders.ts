import {MigrationInterface, QueryRunner} from "typeorm";

export class orders1662044328557 implements MigrationInterface {
    name = 'orders1662044328557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_entity" ("id" bigint NOT NULL, "amountA" character varying, "amountB" character varying, "amountLeftToFill" character varying, "fees" character varying, "tokenA" character varying, "tokenB" character varying, "user" character varying, "bool" boolean, CONSTRAINT "PK_6a5532d4752516bb661d3c7e928" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders_entity"`);
    }

}
