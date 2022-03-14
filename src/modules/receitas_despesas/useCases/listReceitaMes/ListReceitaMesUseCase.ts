import { inject, injectable } from "tsyringe";
import { Receita } from "../../entities/receita";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";

@injectable()
class ListReceitaMesUseCase{

    constructor(
        @inject("ReceitaRepository")
        private receitaRepository : IReceitaRepository){} 
    
    async execute(ano: string, mes: string) : Promise <Receita[]>{
                
        const receitas = await this.receitaRepository.listByMes(ano, mes);

        return receitas;

    }
}

export { ListReceitaMesUseCase }