import { ContactInfo } from "src/types";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

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

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  typeOfOrganization: string;

  @Field(() => String)
  @Column()
  phoneNumber: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field()
  @Column({ type: "int", default: 0 })
  stars!: number;

  @ManyToOne(() => User, (user) => user.organizations)
  creator: User;

  @Field()
  @Column()
  creatorId: number;
}
