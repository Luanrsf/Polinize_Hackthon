import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

    @Column()
    password: string;

    @OneToMany(() => ItemGame, itemGame => itemGame.user)
    itemGame: ItemGame;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default User;
  