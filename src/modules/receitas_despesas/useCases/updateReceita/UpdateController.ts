import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateReceitaUseCase } from "./UpdateReceitaUseCase";


class UpdateReceitaController {

    async handle(request: Request, response: Response): Promise <Response> {
        const {id} = request.params;
        const { valor, descricao, categoria } = request.body;

        const updateReceitaUseCase = container.resolve(UpdateReceitaUseCase);

        await updateReceitaUseCase.execute({receita_id: id, valor, descricao, categoria});

        return response.status(204).send();

    }
}

export { UpdateReceitaController }