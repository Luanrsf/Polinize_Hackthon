import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import ItemGame from './ItemGame';

@Entity('users')
  class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telNumber: string;

    @ManyToMany(() => ItemGame, itemGame => itemGame.user)
    itemGame: ItemGame;
  

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default User;
  