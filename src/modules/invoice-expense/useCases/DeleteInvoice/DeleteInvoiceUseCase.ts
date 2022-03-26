import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";

interface IRequest{
    id: string;
}

@injectable()
class DeleteInvoiceUseCase{
    constructor(
        @inject("InvoiceRepository")
        private invoiceRepository: IInvoiceRepository){}

    async execute({id} : IRequest): Promise<void>{

        const verifyId = await this.invoiceRepository.findById(id);

        if(!verifyId){
            throw new AppError("Receita não existe!")
        }
        this.invoiceRepository.deleteId(id);
    }
}

export { DeleteInvoiceUseCase}