import {MigrationInterface, QueryRunner} from "typeorm";

export class orders1662044399016 implements MigrationInterface {
    name = 'orders1662044399016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_entity" DROP CONSTRAINT "PK_6a5532d4752516bb661d3c7e928"`);
        await queryRunner.query(`ALTER TABLE "orders_entity" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders_entity" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_entity" ADD CONSTRAINT "PK_6a5532d4752516bb661d3c7e928" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_entity" DROP CONSTRAINT "PK_6a5532d4752516bb661d3c7e928"`);
        await queryRunner.query(`ALTER TABLE "orders_entity" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders_entity" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_entity" ADD CONSTRAINT "PK_6a5532d4752516bb661d3c7e928" PRIMARY KEY ("id")`);
    }

}
