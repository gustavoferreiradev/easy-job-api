import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./City";

@Entity("JobSeeker")
class JobSeeker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("integer")
  cpf: number;

  @Column("varchar", { length: 255 })
  address: string;

  @Column("integer")
  number: number;

  @Column("varchar", { length: 255 })
  neighborhood: string;

  @Column("varchar", { length: 255 })
  adjunct: string;

  @Column("varchar", { length: 8 })
  zipCode: string;

  @OneToOne(() => City)
  @JoinColumn({ name: "cityId" })
  city: City;
}

export { JobSeeker };
