import {MigrationInterface, QueryRunner, Table} from "typeorm";
const env = require(`../../main/config/env`)

export class users1614845495529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: env.table_to_users,
                columns: [
                    {
                            name: 'id',
                            type: 'varchar',
                            isPrimary: true,
                    },
                    {
                            name: 'nome',
                            type: 'varchar'
                    },
                    {
                            name: 'email',
                            type: 'varchar',
                            isUnique: true
                    },
                    {
                            name: 'password',
                            type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
