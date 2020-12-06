import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import Ratting from './Ratting';
import User from './User';

@Entity('itemgames')
class ItemGame {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: "conosole" | "jogo" | "board-games" | "mod/pererifericos";

  @Column()
  picture: string;

  @Column()
  user_id: string;
  
  @Column()
  ratting_id: string;

  @OneToMany(() => User, user => user.itemGame, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Ratting, ratting => ratting.itemGame, { eager: true })
  @JoinColumn({ name: 'ratting_id' })
  ratting: Ratting;


  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ItemGame;
