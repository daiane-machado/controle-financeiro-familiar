import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("receita")
class Receita {

    @PrimaryColumn()
    id?: string;

    @Column()
    descricao!: string;

    @Column()
    valor!: number;

    @Column()
    categoria!: string;

    @CreateDateColumn()
    data = new Date();


    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }        
    }

}


export { Receita }