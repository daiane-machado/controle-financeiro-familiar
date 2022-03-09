import { inject, injectable } from "tsyringe";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";


interface IRequest {

    descricao: string;
    valor: number;
    categoria: string;
}

@injectable()
class CreateReceitaUseCase {
    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IReceitaRepository){}


    async execute({ descricao, valor, categoria }: IRequest): Promise<void> {

        const receitaAlreadyExist = await this.receitaRepository.findByDescricao(descricao);
        
        if(receitaAlreadyExist) {
            throw new Error("Receita já existe!");
        }
        await this.receitaRepository.create({ descricao, valor, categoria });
    }
}

export { CreateReceitaUseCase }