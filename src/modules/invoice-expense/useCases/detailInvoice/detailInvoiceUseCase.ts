import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Invoice } from "../../entities/invoice";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";

interface IRequest{
    id: string;
}

@injectable()
class DetailInvoiceUseCase{
    constructor(
        @inject("InvoiceRepository")
        private invoiceRepository: IInvoiceRepository){}
    
    async execute({id}: IRequest): Promise<Invoice>{

        const detailedInvoice = await this.invoiceRepository.detail(id);

        if(!detailedInvoice){
            throw new AppError("Receita não encontrada!!")
        } 
        return detailedInvoice;

}
}
export { DetailInvoiceUseCase }