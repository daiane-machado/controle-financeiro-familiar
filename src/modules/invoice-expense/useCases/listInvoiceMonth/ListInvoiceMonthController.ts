import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInvoiceMonthUseCase } from "./ListInvoiceMonthUseCase"

class ListInvoiceMonthController{

    async handle(request: Request, response: Response): Promise <Response>{
        const listInvoiceMonthUseCase = container.resolve(ListInvoiceMonthUseCase);
        const { ano, mes } = request.params;


        const all = await listInvoiceMonthUseCase.execute(ano, mes);

        return response.json(all);

    }

}

export { ListInvoiceMonthController }