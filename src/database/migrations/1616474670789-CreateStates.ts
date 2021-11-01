import { MigrationInterface, QueryRunner, Table } from "typeorm";
import states from "../../services/states";

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
            length: "2",
          },
        ],
      })
    );

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("state")
      .values([
        {
          name: "Acre",
          acronym: "AC",
        },
        {
          name: "Alagoas",
          acronym: "AL",
        },
        {
          name: "Amapá",
          acronym: "AP",
        },
        {
          name: "Amazonas",
          acronym: "AM",
        },
        {
          name: "Bahia",
          acronym: "BA",
        },
        {
          name: "Ceará",
          acronym: "CE",
        },
        {
          name: "Distrito Federal",
          acronym: "DF",
        },
        {
          name: "Espírito Santo",
          acronym: "DF",
        },
        {
          name: "Goiás",
          acronym: "GO",
        },
        {
          name: "Maranhão",
          acronym: "MA",
        },
        {
          name: "Mato Grosso",
          acronym: "MT",
        },
        {
          name: "Mato Grosso do Sul",
          acronym: "MS",
        },
        {
          name: "Minas Gerais",
          acronym: "MG",
        },
        {
          name: "Pará",
          acronym: "PA",
        },
        {
          name: "Paraíba",
          acronym: "PB",
        },
        {
          name: "Paraná",
          acronym: "PR",
        },
        {
          name: "Pernambuco",
          acronym: "PE",
        },
        {
          name: "Piauí",
          acronym: "PI",
        },
        {
          name: "Rio de Janeiro",
          acronym: "RJ",
        },
        {
          name: "Rio Grande do Norte",
          acronym: "RN",
        },
        {
          name: "Rio Grande do Sul",
          acronym: "RS",
        },
        {
          name: "Rondônia",
          acronym: "RO",
        },
        {
          name: "Roraima",
          acronym: "RR",
        },
        {
          name: "Santa Catarina",
          acronym: "SC",
        },
        {
          name: "São Paulo",
          acronym: "SP",
        },
        {
          name: "Sergipe",
          acronym: "SE",
        },
        {
          name: "Tocantins",
          acronym: "TO",
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("state");
  }
}
