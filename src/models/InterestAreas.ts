import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("InterestAreas")
class InterestAreas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 255 })
    description: string;

}

export { InterestAreas };