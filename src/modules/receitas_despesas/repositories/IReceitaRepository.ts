import { Receita } from "../entities/receita";

interface ICreateReceitaDTO {
    valor: number,
    descricao: string,
    categoria: string,
}

interface IReceitaRepository {
    create({valor, descricao, categoria} : ICreateReceitaDTO) : Promise <void>;
    findByDescricao( descricao: string  ) : Promise <Receita | undefined>;
    findById( id: string ) : Promise <Receita | undefined>;
    list(): Promise <Receita[]>;
    searchByDescricao(param: string) : Promise <Receita[]>;
    deleteId( id: string ) : Promise <void>;
    listByMes(data: string, mes: string) : Promise <Receita[]>;
}

export { ICreateReceitaDTO, IReceitaRepository }