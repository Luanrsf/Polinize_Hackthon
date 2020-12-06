import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import ItemGame from './ItemGame';
  
  @Entity('rattings')
    class Ratting {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      description: string;

      @OneToMany(() => ItemGame, itemGame => itemGame.ratting)
      itemGame: ItemGame
  
      @CreateDateColumn()
      created_at: Date;
  
      @UpdateDateColumn()
      updated_at: Date;
    }
    
    export default Ratting;
    