import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Organization } from "./Organization";
import { User } from "./User";

@Entity()
export class Star extends BaseEntity {
  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.stars)
  user: User;

  @PrimaryColumn()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.stars)
  organization: Organization;
}
