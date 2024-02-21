import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Star } from "./Stars";

@ObjectType()
@Entity()
export class Organization extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  typeOfOrganization!: string;

  @Field(() => String)
  @Column()
  phoneNumber!: string;

  @Field(() => String)
  @Column()
  address!: string;

  @Field(() => String)
  @Column()
  email!: string;

  @Field()
  @Column({ type: "int", default: 0 })
  points!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.organizations, { onDelete: "CASCADE" })
  creator: User;

  @Field()
  @Column()
  creatorId!: number;

  @OneToMany(() => Star, (star) => star.organization)
  stars: Star[];

  @Field(() => String)
  @Column()
  description!: string;
}
