import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobSeekerJobListingTable1618718231977
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "jobSeekerJobListing",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "jobListingId",
            type: "integer",
          },

          {
            name: "jobSeekerId",
            type: "integer",
          },
        ],

        foreignKeys: [
          {
            name: "FKJobListing",
            referencedTableName: "jobListing",
            referencedColumnNames: ["id"],
            columnNames: ["jobListingId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKJobSeeker",
            referencedTableName: "jobSeeker",
            referencedColumnNames: ["id"],
            columnNames: ["jobSeeker"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("jobSeekerJobListing");
  }
}
