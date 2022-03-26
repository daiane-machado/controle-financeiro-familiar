import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Invoice } from "../../entities/invoice";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";

@injectable()
class ListInvoiceMonthUseCase{

    constructor(
        @inject("InvoiceRepository")
        private InvoiceRepository : IInvoiceRepository){} 
    
    async execute(year: string, month: string) : Promise <Invoice[]>{
                
        const Invoices = await this.InvoiceRepository.listByMes(year, month);

        if (!Invoices){
            throw new AppError("Nenhuma Invoice encontrada",400)
        }
        return Invoices;

    }
}

export { ListInvoiceMonthUseCase }