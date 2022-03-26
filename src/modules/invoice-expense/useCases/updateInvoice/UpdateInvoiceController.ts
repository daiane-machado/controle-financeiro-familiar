import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInvoiceUseCase } from "./UpdateInvoiceUseCase";


class UpdateInvoiceController {

    async handle(request: Request, response: Response): Promise <Response> {
        const {id} = request.params;
        const { value, description, category } = request.body;

        const updateInvoiceUseCase = container.resolve(UpdateInvoiceUseCase);

        await updateInvoiceUseCase.execute({invoice_id: id, value, description, category});

        return response.status(204).send("Receita atualizada!");

    }
}

export { UpdateInvoiceController }