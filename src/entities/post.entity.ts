import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  contents: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    cascade: true,
  })
  user: User;

  @Column()
  userId: number;

  @ManyToMany(() => User, (user) => user.likePosts, {
    cascade: true,
  })
  @JoinTable()
  likeUser: User[];
}
