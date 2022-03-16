import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Receita } from "../../entities/receita";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";


@injectable()
class SearchReceitaUseCase {
    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IReceitaRepository
    ){}

        async execute(param: string): Promise<Receita[]>{

            const resultado = await this.receitaRepository.searchByDescricao(param);

            if(!resultado.length){
                throw new AppError("Nenhuma receita encontrada.")
            }
           return resultado;
    }
}

export { SearchReceitaUseCase }