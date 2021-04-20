import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobSeekerTable1617763770991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "jobSeeker",
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
            name: "cpf",
            type: "integer",
            length: "11",
          },
          {
            name: "address",
            type: "varchar",
            length: "255",
          },
          {
            name: "number",
            type: "integer",
            length: "10",
          },
          {
            name: "neighborhood",
            type: "varchar",
            length: "255",
          },
          {
            name: "adjunct",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "zipCode",
            type: "varchar",
            length: "8",
          },
          {
            name: "phone",
            type: "integer",
            length: "11",
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
          },
          {
            name: "cityId",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKCity",
            referencedTableName: "city",
            referencedColumnNames: ["id"],
            columnNames: ["cityId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("jobSeeker");
  }
}
