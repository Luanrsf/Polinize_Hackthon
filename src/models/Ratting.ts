import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
import ItemGame from './ItemGame';
  
  @Entity('ratting')
    class Ratting {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      description: "Otimo" | "Razoavel" | "Ruim";
  
      @CreateDateColumn()
      created_at: Date;
  
      @UpdateDateColumn()
      updated_at: Date;
    }
    
    export default Ratting;
    