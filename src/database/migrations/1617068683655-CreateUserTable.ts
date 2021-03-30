import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1617068683655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: "user_id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",                    
                },

                {
                    name: "login",
                    type: "varchar",
                    isUnique: true,
                    length: "255"
                },

                {
                    name: "password",
                    type: "varchar",
                    length: "255"
                }
                
            ]
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('user');
        
    }

}
