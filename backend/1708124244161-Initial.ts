import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1708124244161 implements MigrationInterface {
    name = 'Initial1708124244161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "star" ("value" integer NOT NULL, "userId" integer NOT NULL, "organizationId" integer NOT NULL, CONSTRAINT "PK_3857b121aacb0204fe9b62725b2" PRIMARY KEY ("userId", "organizationId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" text NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "typeOfOrganization" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "points" integer NOT NULL DEFAULT '0', "creatorId" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "star" ADD CONSTRAINT "FK_2018c9deccb66c6db30a1ddbd1d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "star" ADD CONSTRAINT "FK_3354eee7a68eb516698e53adfa6" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization" ADD CONSTRAINT "FK_221ca61526d7f786a4c4a46e59b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_221ca61526d7f786a4c4a46e59b"`);
        await queryRunner.query(`ALTER TABLE "star" DROP CONSTRAINT "FK_3354eee7a68eb516698e53adfa6"`);
        await queryRunner.query(`ALTER TABLE "star" DROP CONSTRAINT "FK_2018c9deccb66c6db30a1ddbd1d"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "star"`);
    }

}
