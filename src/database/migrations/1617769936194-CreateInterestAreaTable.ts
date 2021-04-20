import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInterestAreaTable1617769936194
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "interestArea",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "description",
            type: "varchar",
            length: "255",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("interestArea");
  }
}
