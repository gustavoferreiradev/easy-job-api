import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("interestArea")
class InterestArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  description: string;
}

export { InterestArea };
