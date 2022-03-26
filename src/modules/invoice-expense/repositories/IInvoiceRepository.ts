import { Invoice } from "../entities/invoice";

interface ICreateInvoicesDTO {
    value: number,
    description: string,
    category: string,
}

interface IInvoiceRepository {
    create({value, description, category} : ICreateInvoicesDTO) : Promise <void>;
    findByDescription( description: string  ) : Promise <Invoice | undefined>;
    findById( id: string ): Promise <Invoice | undefined>;
    list(): Promise <Invoice[]>;
    searchByDescription(param: string) : Promise <Invoice[]>;
    deleteId( id: string ) : Promise <void>;
    listByMes(data: string, mes: string) : Promise <Invoice[]>;
    update(id: string, valor:number, description: string, category: string ): Promise<void>;
    detail(id: string): Promise <Invoice | undefined>;
}

export { ICreateInvoicesDTO, IInvoiceRepository }