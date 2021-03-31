import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./State";

@Entity("city")
class City {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => State)
  @JoinColumn({ name: "state_id" })
  state: State;

  @Column()
  name: string;

  constructor() {}
}

export { City };
