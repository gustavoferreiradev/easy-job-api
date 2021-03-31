import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCityTable1617156821971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "city",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "state_id",
            type: "integer",
          },

          {
            name: "name",
            type: "varchar",
            length: "255",
          },
        ],
        foreignKeys: [
          {
            name: "FKState",
            referencedTableName: "state",
            referencedColumnNames: ["id"],
            columnNames: ["state_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("city");
  }
}
