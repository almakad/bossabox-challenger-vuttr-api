import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'
import { v4 as uuid} from 'uuid'
const env = require('../main/config/env')

@Entity(env.table_to_users)
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @Column()
  email: string

  
  @Column()
  password: string


  @BeforeInsert()
  setId() {
    this.id = uuid()
  }

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 12)
  }

}
export default User