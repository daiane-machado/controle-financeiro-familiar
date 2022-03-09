import { container } from "tsyringe";
import { ReceitaRepository } from "../../modules/receitas_despesas/repositories/implementations/ReceitaRepository";
import { IReceitaRepository } from "../../modules/receitas_despesas/repositories/IReceitaRepository";


container.registerSingleton<IReceitaRepository>(
    "ReceitaRepository", ReceitaRepository
);