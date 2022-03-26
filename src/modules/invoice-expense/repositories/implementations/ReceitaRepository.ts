import { getRepository, Repository } from "typeorm";
import { Invoice } from "../../entities/invoice";
import { ICreateInvoicesDTO, IInvoiceRepository } from "../IInvoiceRepository";


class InvoiceRepository implements IInvoiceRepository {
    private repository: Repository<Invoice>;

    private static INSTANCE: InvoiceRepository;

    constructor(){
        this.repository = getRepository(Invoice);
    }

    public static getInstance(): InvoiceRepository {
        if(!InvoiceRepository.INSTANCE){
            InvoiceRepository.INSTANCE = new InvoiceRepository();
        }
        return InvoiceRepository.INSTANCE;
    }

    async create({ value, description, category }: ICreateInvoicesDTO): Promise<void> {
        const receita = this.repository.create({
            description,
            value,
            category
        });

        await this.repository.save(receita);
       
    }

    async findByDescription(description: string): Promise <Invoice | undefined> {
        const receita = await this.repository.findOne({ description });
    
        return receita;

    }

    async findById(id: string): Promise<Invoice | undefined> {
        const receita = await this.repository.findOne(id);

        return receita;
    }
    
    async list(): Promise<Invoice[]> {
        //const receitas = await this.repository.find();
        //return receitas;
        return this.repository.createQueryBuilder("receita")
        .select("receita.description, receita.value, receita.data")
        .getRawMany();
    }

    async listByMes(ano: string, mes: string): Promise<Invoice[]> {
        
        const newMes = parseInt (mes);
        const newAno = parseInt (ano);
        
        return this.repository.createQueryBuilder("invoice")
        .where("EXTRACT(MONTH FROM data) = :mes AND EXTRACT(YEAR FROM data) = :ano" ,{mes:`${newMes}`, ano:`${newAno}`})
        .getMany();
     }

    async searchByDescription(param: string): Promise<Invoice[]> {
        //return this.repository.query('SELECT descricão, value, date FROM invoice WHERE ')
        return this.repository.createQueryBuilder("invoice")
        .select("invoice.description, invoice.value, invoice.data")
        .where("invoice.description ILIKE :param", {param: `%${param}%`})
        .getRawMany();

    }

    async deleteId( id : string): Promise<void>{       
        await this.repository.delete(id);
    }

    async update(id: string, value:number, description: string, category: string ): Promise<void> {
        
       await this.repository.createQueryBuilder("invoice")
        .update(Invoice)
        .set({value: value, description: description, category: category})
        .where("id= :id", {id: id})
        .execute();
    }

    async detail(id: string): Promise<Invoice | undefined> {
       
       return this.repository.createQueryBuilder("invoice")
        .select("invoice.description, invoice.value, invoice.data")
        .where("id= :id", {id:id})
        .getRawOne();
    }

}

export { InvoiceRepository }

