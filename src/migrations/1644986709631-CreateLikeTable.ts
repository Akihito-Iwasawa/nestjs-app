import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLikeTable1644986709631 implements MigrationInterface {
    name = 'CreateLikeTable1644986709631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like" ("postId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_17faf5022c573bbe5513b647df8" PRIMARY KEY ("postId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_32f13d85e4fe4644b342dffd0b" ON "like" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c049c9d360f27e3adfb060a512" ON "like" ("userId") `);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_32f13d85e4fe4644b342dffd0b3" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_c049c9d360f27e3adfb060a5123" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_c049c9d360f27e3adfb060a5123"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_32f13d85e4fe4644b342dffd0b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c049c9d360f27e3adfb060a512"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32f13d85e4fe4644b342dffd0b"`);
        await queryRunner.query(`DROP TABLE "like"`);
    }

}
