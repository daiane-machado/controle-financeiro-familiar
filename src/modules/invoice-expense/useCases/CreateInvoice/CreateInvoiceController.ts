import { Request, Response } from "express";
import { CreateInvoiceUseCase } from "./CreateInvoiceUseCase";
import { container } from "tsyringe";


class CreateInvoiceContoller {
    
    
    async handle(request: Request, response: Response): Promise <Response> {
        const { description, value, category } = request.body;

        const createInvoiceUseCase = container.resolve((CreateInvoiceUseCase));

        await createInvoiceUseCase.execute({ description, value, category });

        return response.status(201).json("Receita adicionada!");
    }
}

export { CreateInvoiceContoller }