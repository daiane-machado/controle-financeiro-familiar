import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IReceitaRepository } from "../../repositories/IReceitaRepository";

interface IRequest{
    receita_id: string;
    valor: number;
    descricao: string;
    categoria: string;
}


@injectable()
class UpdateReceitaUseCase{

    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IReceitaRepository){}
    
    async execute({receita_id, valor, descricao, categoria}: IRequest): Promise<void>{
        const receita = await this.receitaRepository.findById(receita_id);

        if(!receita){
            throw new AppError("Receita não encontrada", 400)
        }

        const categoriaValidated = "Outras";       
        if(descricao === "" || descricao === null || descricao === undefined){
            throw new AppError("Descrição é obrigátoria",400)
        }

        const validaValor = Number(valor)
        if(!validaValor || validaValor === null || valor === undefined){
            throw new AppError("Valor é obrigátorio",400)
        }
       
        if(categoria === ""){
            categoria = categoriaValidated;
        }
        
        await this.receitaRepository.update(receita_id, valor, descricao, categoria);

}
}
export { UpdateReceitaUseCase }