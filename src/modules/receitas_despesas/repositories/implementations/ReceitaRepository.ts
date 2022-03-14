import { getRepository, Like, MoreThan, Repository } from "typeorm";
import { Receita } from "../../entities/receita";
import { ICreateReceitaDTO, IReceitaRepository } from "../IReceitaRepository";


class ReceitaRepository implements IReceitaRepository {
    private repository: Repository<Receita>;

    private static INSTANCE: ReceitaRepository;

    constructor(){
        this.repository = getRepository(Receita);
    }

    public static getInstance(): ReceitaRepository {
        if(!ReceitaRepository.INSTANCE){
            ReceitaRepository.INSTANCE = new ReceitaRepository();
        }
        return ReceitaRepository.INSTANCE;
    }

    async create({ valor, descricao, categoria }: ICreateReceitaDTO): Promise<void> {
        const receita = this.repository.create({
            descricao,
            valor,
            categoria
        });

        await this.repository.save(receita);
       
    }

    async findByDescricao(descricao: string): Promise <Receita | undefined> {
        const receita = await this.repository.findOne({ descricao });
        return receita;

    }
    
    async list(): Promise<Receita[]> {
        //const receitas = await this.repository.find();
        //return receitas;
        return this.repository.query('SELECT descricao, valor, data FROM receita')
    
    }

    async listByMes(ano: string, mes: string): Promise<Receita[]> {
        
        const newMes = parseInt (mes);
        const newAno = parseInt (ano);
        

        return this.repository.createQueryBuilder("receita")
        .where("EXTRACT(MONTH FROM data) = :mes AND EXTRACT(YEAR FROM data) = :ano" ,{mes:`${newMes}`, ano:`${newAno}`})
        .getMany();
     }

    async searchByDescricao(param: string): Promise<Receita[]> {
        //return this.repository.query('SELECT descricão, valor, date FROM receita WHERE ')
        return this.repository.createQueryBuilder("receita")
        .where("receita.descricao ILIKE :param", {param: `%${param}%`})
        .getMany();

    }


    async findById(id: string): Promise<Receita | undefined> {
        const receita = await this.repository.findOne({ id });
        return receita;
    }

    async deleteId( id : string): Promise<void>{       
        await this.repository.delete(id);
    }
   
    
}

export { ReceitaRepository }

