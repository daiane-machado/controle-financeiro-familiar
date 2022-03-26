import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";


interface IRequest {

    description: string;
    value: number;
    category: string;
}

@injectable()
class CreateInvoiceUseCase {
    constructor(
        @inject("ReceitaRepository")
        private receitaRepository: IInvoiceRepository){}

    async execute({ description, value, category }: IRequest): Promise<void> {

        const categoryValidated = "Outras";       
        if(description === "" || description === null || description === undefined){
            throw new AppError("Descrição é obrigátoria",400)
        }

        const validaValue = Number(value)
        if(!validaValue || validaValue === null || value === undefined){
            throw new AppError("value é obrigátorio",400)
        }
       
        if(category === ""){
            category = categoryValidated;
        }
         
        const receitaAlreadyExist = await this.receitaRepository.findByDescription(description);
        if(receitaAlreadyExist) {
            const mensage = `Receita ${description} já existe`;
            throw new AppError(mensage);
        }
        await this.receitaRepository.create({ description, value, category });
               
    }
}

export { CreateInvoiceUseCase }