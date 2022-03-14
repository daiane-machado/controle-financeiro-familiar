import { inject, injectable } from "tsyringe";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";
import { Receita } from "../../entities/receita";
import { AppError } from "../../../../erros/AppError";

@injectable()
class ListReceitaUseCase {
    constructor(
    @inject("ReceitaRepository")
    private receitaRepository: IReceitaRepository){}
    
        async execute(): Promise<Receita[]>{

            const resultado = await this.receitaRepository.list()

            if(!resultado.length){
                throw new AppError("Nenhuma receita encontrada.")
            }
           return resultado;
        }
}

export { ListReceitaUseCase }