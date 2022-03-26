import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { Invoice } from "../../entities/invoice";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";


@injectable()
class SearchInvoiceUseCase {
    constructor(
        @inject("InvoiceRepository")
        private invoiceRepository: IInvoiceRepository
    ){}

        async execute(param: string): Promise<Invoice[]>{

            const invoice = await this.invoiceRepository.searchByDescription(param);

            if(!invoice.length){
                throw new AppError("Nenhuma Invoice encontrada.")
            }
           return invoice;
    }
}

export { SearchInvoiceUseCase }