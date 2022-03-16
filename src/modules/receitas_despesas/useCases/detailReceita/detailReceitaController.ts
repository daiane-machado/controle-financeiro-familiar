import { Request, Response } from "express";
import { container } from "tsyringe";
import { DetailReceitaUseCase } from "./detailReceitaUseCase";


class DetailReceitaController{
    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
               
        const detailReceitaUseCase = container.resolve(DetailReceitaUseCase);
          
        const one = await detailReceitaUseCase.execute({id})

        return response.status(201).json(one)

    }
}
export { DetailReceitaController }