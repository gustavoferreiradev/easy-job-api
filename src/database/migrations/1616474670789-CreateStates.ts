import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStates1616474670789 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "state",
        columns: [
          {
            name: "id",
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
            name: "acronym",
            type: "varchar",
            length: "2"
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("state");
  }
}
