import { request } from "express";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
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
         
        const receitaAlreadyExist = await this.receitaRepository.findByDescricao(descricao);
        if(receitaAlreadyExist) {
            const msg = `Receita ${descricao} já existe`;
            throw new AppError(msg);
        }
        await this.receitaRepository.create({ descricao, valor, categoria });
               
    }
}

export { CreateReceitaUseCase }