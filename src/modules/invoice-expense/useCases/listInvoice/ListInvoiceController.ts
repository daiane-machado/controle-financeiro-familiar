import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInvoiceUseCase } from "./ListInvoiceUseCase";



class ListInvoiceController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listInvoiceUseCase = container.resolve(ListInvoiceUseCase);

        const all = await listInvoiceUseCase.execute();

        return response.json(all);
    }
}

export { ListInvoiceController }