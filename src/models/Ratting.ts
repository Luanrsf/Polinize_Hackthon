import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
  } from 'typeorm';
import ItemGame from './ItemGame';
  
  @Entity('ratting')
    class Ratting {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      description: string;

      @ManyToMany(() => ItemGame, itemGame => itemGame.ratting)
      itemGame: ItemGame;
  
      @CreateDateColumn()
      created_at: Date;
  
      @UpdateDateColumn()
      updated_at: Date;
    }
    
    export default Ratting;
    