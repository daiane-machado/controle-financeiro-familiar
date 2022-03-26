import { Request, Response }from "express";
import { container } from "tsyringe";
import { DeleteInvoiceUseCase } from "./DeleteInvoiceUseCase"


class DeleteInvoiceController {

    async handle(request: Request, response: Response) : Promise <Response>{
        const { id } = request.params;
               
        const deleteInvoiceUseCase = container.resolve(DeleteInvoiceUseCase);

        await deleteInvoiceUseCase.execute({id});

        return response.status(201).json("Receita deletada!");
    }
}

export { DeleteInvoiceController }