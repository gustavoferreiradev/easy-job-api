import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import { Company } from "./Company";

@Entity("user")
class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 })
  login: string;

  @Column("varchar", { length: 255 })
  password: string;

  @Column("varchar", { length: 255 })
  type: string;

  @OneToOne(() => Company)
  @JoinColumn({ name: "companyId" })
  company: Company;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default User;
