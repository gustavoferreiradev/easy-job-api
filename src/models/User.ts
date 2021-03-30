import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import  bcrypt  from 'bcryptjs';

@Entity('user')
class User {
    @PrimaryGeneratedColumn() 
    user_id: number;

    @Column("varchar", { length: 255 })
    name: string;

    @Column("varchar", { length: 255 })
    login: string;

    @Column("varchar", { length: 255 })
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }


}

export default User;