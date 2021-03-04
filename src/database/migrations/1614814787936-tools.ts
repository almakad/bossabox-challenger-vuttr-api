import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tools1614814787936 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tools',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },{
            name: 'title',
            type: 'varchar'
          },{
            name: 'link',
            type: 'varchar'
          },{
            name: 'description',
            type: 'mediumtext'
          },{
            name: 'title',
            type: 'mediumtext'
          }

        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
