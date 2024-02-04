import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Organization } from "./Organization";
import { User } from "./User";

@Entity()
export class Star extends BaseEntity {
  @Column({ type: "int" })
  value: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.stars)
  user: User;

  @PrimaryColumn()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.stars, {
    onDelete: "CASCADE",
  })
  organization: Organization;
}
