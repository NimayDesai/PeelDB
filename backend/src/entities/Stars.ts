import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Organization } from "./Organization";
import { User } from "./User";

@Entity()
export class Star extends BaseEntity {
  @Column({ type: "int" })
  value: number;

  @PrimaryColumn() // Add User who Vote on it
  userId: number;

  @ManyToOne(() => User, (user) => user.stars)
  user: User;

  @PrimaryColumn() // Add Organization which is voted on
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.stars, {
    onDelete: "CASCADE", // Remove Duplicate Key Error
  })
  organization: Organization;
}
