import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Receita } from "../../entities/receita";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";

@injectable()
class ListReceitaMesUseCase{

    constructor(
        @inject("ReceitaRepository")
        private receitaRepository : IReceitaRepository){} 
    
    async execute(ano: string, mes: string) : Promise <Receita[]>{
                
        const receitas = await this.receitaRepository.listByMes(ano, mes);

        if (!receitas){
            throw new AppError("Nenhuma receita encontrada",400)
        }
        return receitas;

    }
}

export { ListReceitaMesUseCase }