import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReceita1646798849439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "receita",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary:true,
                        },
                        {
                            name: "descricao",
                            type: "varchar",
                        },
                        {
                            name: "valor",
                            type: "float",
                        },
                        {
                            name: "categoria",
                            type: "varchar",
                        },
                        {
                            name: "data",
                            type: "timestamp",
                            default: "now()",
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("receita");
    }

}
