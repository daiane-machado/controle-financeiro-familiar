import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Receita } from "../../entities/receita";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";

interface IRequest{
    id: string;
}

@injectable()
class DeleteReceitaUseCase{
    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IReceitaRepository){}

    async execute({id} : IRequest): Promise<void>{

        const verificaId = await this.receitaRepository.findById(id);

        if(!verificaId){
            throw new AppError("Receita não existe!")
        }
        this.receitaRepository.deleteId(id);
    }
}

export { DeleteReceitaUseCase}