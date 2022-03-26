import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";

interface IRequest{
    invoice_id: string;
    value: number;
    description: string;
    category: string;
}


@injectable()
class UpdateInvoiceUseCase{

    constructor(
        @inject("InvoiceRepository")
        private invoiceRepository: IInvoiceRepository){}
    
    async execute({invoice_id, value, description, category}: IRequest): Promise<void>{
        const invoice = await this.invoiceRepository.findById(invoice_id);

        if(!invoice){
            throw new AppError("Receita não encontrada", 400)
        }

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
        
        await this.invoiceRepository.update(invoice_id, value, description, category);

}
}
export { UpdateInvoiceUseCase }