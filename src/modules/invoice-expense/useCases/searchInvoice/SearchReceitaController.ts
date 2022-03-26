import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchInvoiceUseCase } from "./SearchRecitaDescricaoUseCase";


class SearchInvoiceController{
    async handle(request: Request, response: Response): Promise<Response>{

        const searchInvoiceUseCase = container.resolve(SearchInvoiceUseCase)
        const { param } = request.params; 
        
        const all = await searchInvoiceUseCase.execute(param);

        return response.status(201).json(all);

    }
}

export { SearchInvoiceController }