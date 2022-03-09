import { Receita } from "../entities/receita";

interface ICreateReceitaDTO {
    valor: number;
    descricao: string;
    categoria: string
}

interface IReceitaRepository {
    create({valor, descricao, categoria} : ICreateReceitaDTO) : Promise <void>;
    findByDescricao( descricao: string  ) : Promise <Receita | undefined>;
    list(): Promise <Receita[]>;
    
}

export { ICreateReceitaDTO, IReceitaRepository }