import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanyTable1617162339604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "company",
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
            name: "cnpj",
            type: "integer",
            length: "14",
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
            name: "contactName",
            type: "varchar",
            length: "255",
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
            name: "city_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKCity",
            referencedTableName: "city",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("company");
  }
}
