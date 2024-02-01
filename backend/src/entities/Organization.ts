import { ContactInfo } from "src/types";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

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
}
