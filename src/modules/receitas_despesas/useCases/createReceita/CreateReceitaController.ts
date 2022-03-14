import { Request, Response } from "express";
import { CreateReceitaUseCase } from "./CreateReceitaUseCase";
import { container } from "tsyringe";


class CreateReceitaController {
    
    
    async handle(request: Request, response: Response): Promise <Response> {
        const { descricao, valor, categoria } = request.body;

        const createReceitaUseCase = container.resolve((CreateReceitaUseCase));

        await createReceitaUseCase.execute({ descricao, valor, categoria });

        return response.status(201).json("Receita adicionada!");
    }
}

export { CreateReceitaController }