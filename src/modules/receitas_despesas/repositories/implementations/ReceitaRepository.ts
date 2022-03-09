import { getRepository, Repository } from "typeorm";
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
        const receita = await this.repository.find();
        return receita;
    }
   
    
}

export { ReceitaRepository }