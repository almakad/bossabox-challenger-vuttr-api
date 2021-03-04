import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('tools')
class Tools {

  @PrimaryColumn('varchar',{
    length:20
  })
  id: string

  @Column()
  title: string 
  
  @Column()
  link: string
  
  @Column()
  description: string
  
  @Column()
  tags: string

  @BeforeInsert()
  setId() {
    this.id = uuid()
  }
  
}
