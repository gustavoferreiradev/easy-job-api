import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./City";

@Entity("company")
class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("integer")
  cnpj: number;

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

  @Column("varchar", { length: 255 })
  contactName: string;

  @Column("integer")
  phone: number;

  @Column("varchar", { length: 255 })
  email: string;

  @OneToOne(() => City)
  @JoinColumn({ name: "city_id" })
  city: City;
}

export { Company };
