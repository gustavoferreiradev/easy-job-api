import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { InterestArea } from "./InterestArea";

@Entity("jobListing")
class JobListing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("integer")
  status: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "companyId" })
  companyId: Company;

  @ManyToOne(() => InterestArea)
  @JoinColumn({ name: "interestAreaId" })
  interestAreaId: InterestArea;
}

export { JobListing };
