import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchReceitaUseCase } from "./SearchRecitaDescricaoUseCase";


class SearchReceitaController{
    async handle(request: Request, response: Response): Promise<Response>{

        const searchReceitaUseCase = container.resolve(SearchReceitaUseCase)
        const { param } = request.params; 
        
        const all = await searchReceitaUseCase.execute(param);

        return response.status(201).json(all);

    }
}

export { SearchReceitaController }