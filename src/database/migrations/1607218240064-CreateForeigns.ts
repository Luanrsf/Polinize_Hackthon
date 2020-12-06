import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeigns1607218240064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'itemgames',
            new TableForeignKey({
              name: 'ItemGameUsers',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );

          await queryRunner.createForeignKey(
            'itemgames',
            new TableForeignKey({
              name: 'ItemGamesRatting',
              columnNames: ['ratting_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'rattings',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('itemgames', 'ItemGamesRatting');
        await queryRunner.dropForeignKey('itemgames', 'ItemGamesUser');
    }

}
