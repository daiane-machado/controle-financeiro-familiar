import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Receita } from "../../entities/receita";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";

interface IRequest{
    id: string;
}

@injectable()
class DetailReceitaUseCase{
    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IReceitaRepository){}
    
    async execute({id}: IRequest): Promise<Receita>{

        const resultado = await this.receitaRepository.detail(id);

        if(!resultado){
            throw new AppError("Receita não encontrada!!")
        } /* else {
            const dados = {
                descricao: resultado?.descricao,
                valor: resultado?.valor,
                data: resultado?.data
            }
            return dados;
        }  */
        return resultado;

}
}
export { DetailReceitaUseCase }