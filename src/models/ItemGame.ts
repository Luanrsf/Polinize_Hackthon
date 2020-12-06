import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
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
  type: "console" | "jogo" | "board-games" | "perifericos";

  @Column()
  picture: string;

  @Column()
  user_id: string

  @Column()
  ratting_id: string
  
  @Column()
  description: string;


  @ManyToOne(() => User, user => user.itemGame, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Ratting, ratting => ratting.itemGame, { eager: true })
  @JoinColumn({ name: 'ratting_id' })
  ratting: Ratting;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ItemGame;
