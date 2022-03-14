import { Request, Response }from "express";
import { container } from "tsyringe";
import { DeleteReceitaUseCase } from "./DeleteReceitaUseCase"





class DeleteReceitaController {

    async handle(request: Request, response: Response) : Promise <Response>{
        const { id } = request.params;
               
        const deleteReceitaUseCase = container.resolve(DeleteReceitaUseCase);

        await deleteReceitaUseCase.execute({id});


        return response.status(201).json("Receita deletada!");
    }
}

export { DeleteReceitaController }