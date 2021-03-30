import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("state")
class State {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column("varchar", { length: 250 })
    name: string;

    @Column("varchar", { length: 2 })
    acronym: string;

    constructor() {}

}

export { State };