import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListReceitaMesUseCase } from "./ListReceitaMesUseCase"

class ListReceitaMesController{

    async handle(request: Request, response: Response): Promise <Response>{
        const listReceitaMesUseCase = container.resolve(ListReceitaMesUseCase);
        const { ano, mes } = request.params;


        const all = await listReceitaMesUseCase.execute(ano, mes);

        return response.json(all);

    }

}

export { ListReceitaMesController }