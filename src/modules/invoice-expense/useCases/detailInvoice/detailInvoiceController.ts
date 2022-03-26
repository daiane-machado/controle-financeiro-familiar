import { Request, Response } from "express";
import { container } from "tsyringe";
import { DetailInvoiceUseCase } from "./detailInvoiceUseCase";


class DetailInvoiceController{
    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
               
        const detailInvoiceUseCase = container.resolve(DetailInvoiceUseCase);
          
        const one = await detailInvoiceUseCase.execute({id})

        return response.status(201).json(one)

    }
}
export { DetailInvoiceController }