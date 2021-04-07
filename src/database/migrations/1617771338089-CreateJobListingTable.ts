import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                          name: "interest_area_id",
                          type: "integer",
                      },
                      {
                          name: "company_id",
                          type: "integer",
                      },


                ],
                foreignKeys: [
                    {
                        name: "FKInterestArea",
                        referencedTableName: "InterestAreas",
                        referencedColumnNames: ["id"],
                        columnNames: ["interest_area_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKCompany",
                        referencedTableName: "company",
                        referencedColumnNames: ["id"],
                        columnNames: ["company_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
