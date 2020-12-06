import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateItemCollection1607218204298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'itemgames',
                columns: [
                  {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'title',
                    type: 'varchar',
                  },
                  {
                    name: 'user_id',
                    type: 'uuid',
                  },
                  {
                    name: 'ratting_id',
                    type: 'uuid',
                    isNullable: true,
                  },
                  {
                    name: 'type',
                    type: 'enum',
                    enum: ['jogo', 'board-games', 'perifericos'],
                  },
                  {
                    name: 'picture',
                    type: 'varchar',
                  },
                  {
                    name: 'description',
                    type: 'varchar',
                  },
                  {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
                  {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
                ],
              }),
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('itemgames');
    }

}
