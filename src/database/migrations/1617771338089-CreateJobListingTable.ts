import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobListingTable1617771338089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "jobListing",
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

          {
            name: "status",
            type: "boolean",
          },

          {
            name: "interestAreaId",
            type: "integer",
          },
          {
            name: "companyId",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKInterestArea",
            referencedTableName: "InterestAreas",
            referencedColumnNames: ["id"],
            columnNames: ["interestAareaId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKCompany",
            referencedTableName: "company",
            referencedColumnNames: ["id"],
            columnNames: ["companyId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("jobListing");
  }
}
