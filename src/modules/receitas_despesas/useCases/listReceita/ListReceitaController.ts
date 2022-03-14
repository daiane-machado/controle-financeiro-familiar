import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListReceitaUseCase } from "./ListReceitaUseCase";



class ListReceitaController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listReceitaUseCase = container.resolve(ListReceitaUseCase);

        const all = await listReceitaUseCase.execute();

        return response.json(all);
    }
}

export { ListReceitaController }