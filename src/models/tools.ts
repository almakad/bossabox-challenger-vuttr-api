import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('tools')
class ToolsDb {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string 
  
  @Column()
  link: string
  
  @Column()
  description: string
  
  @Column()
  tags: string
  
}

export { ToolsDb }