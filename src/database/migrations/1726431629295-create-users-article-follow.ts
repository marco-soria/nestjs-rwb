import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersArticleFollow1726431629295 implements MigrationInterface {
    name = 'CreateUsersArticleFollow1726431629295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article_entity" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoritesCount" integer NOT NULL DEFAULT '0', "authorId" integer, CONSTRAINT "PK_362cadb16e72c369a1406924e2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follow_entity" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followingId" integer NOT NULL, CONSTRAINT "PK_18966373213f8c51750c227943b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity_favorites_article_entity" ("userEntityId" integer NOT NULL, "articleEntityId" integer NOT NULL, CONSTRAINT "PK_c0a8aa506619c89274fb67e273c" PRIMARY KEY ("userEntityId", "articleEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8ef88a9f2c2cd8f110980c8cdb" ON "user_entity_favorites_article_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2cfade677dedd3aee696cec7a5" ON "user_entity_favorites_article_entity" ("articleEntityId") `);
        await queryRunner.query(`ALTER TABLE "article_entity" ADD CONSTRAINT "FK_d84d3caa203db7cf1725b95b0c4" FOREIGN KEY ("authorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity_favorites_article_entity" ADD CONSTRAINT "FK_8ef88a9f2c2cd8f110980c8cdba" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_favorites_article_entity" ADD CONSTRAINT "FK_2cfade677dedd3aee696cec7a57" FOREIGN KEY ("articleEntityId") REFERENCES "article_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_favorites_article_entity" DROP CONSTRAINT "FK_2cfade677dedd3aee696cec7a57"`);
        await queryRunner.query(`ALTER TABLE "user_entity_favorites_article_entity" DROP CONSTRAINT "FK_8ef88a9f2c2cd8f110980c8cdba"`);
        await queryRunner.query(`ALTER TABLE "article_entity" DROP CONSTRAINT "FK_d84d3caa203db7cf1725b95b0c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2cfade677dedd3aee696cec7a5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8ef88a9f2c2cd8f110980c8cdb"`);
        await queryRunner.query(`DROP TABLE "user_entity_favorites_article_entity"`);
        await queryRunner.query(`DROP TABLE "follow_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "article_entity"`);
    }

}
