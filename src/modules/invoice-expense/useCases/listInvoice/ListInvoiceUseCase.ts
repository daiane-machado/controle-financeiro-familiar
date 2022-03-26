import { inject, injectable } from "tsyringe";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";
import { Invoice } from "../../entities/invoice"
import { AppError } from "../../../../erros/AppError";

@injectable()
class ListInvoiceUseCase {
    constructor(
    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository){}
    
        async execute(): Promise<Invoice[]>{

            const invoices = await this.invoiceRepository.list()

            if(!invoices.length){
                throw new AppError("Nenhuma Invoice encontrada.")
            }
           return invoices;
        }
}

export { ListInvoiceUseCase }