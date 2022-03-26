import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("invoice")
class Invoice {

    @PrimaryColumn()
    id?: string;

    @Column()
    description!: string;

    @Column()
    value!: number;

    @Column()
    category?: string;

    @CreateDateColumn()
    date = new Date();


    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }        
    }

}


export { Invoice }