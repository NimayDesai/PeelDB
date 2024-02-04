import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1707021559524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", "creatorId", "createdAt") values ('Fivespan', 'for profit', 'cberingerx@sogou.com', '8596 Meadow Valley Pass', '285-860-1394', 1, '2024-01-29T09:20:41Z');
            `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
