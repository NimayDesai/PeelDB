import { User } from "../entities/User";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "Length must be greater than 2",
          },
        ],
      };
    }
    if (options.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "Length Must be greater than 2",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const user = User.create({
      username: options.username,
      password: hashedPassword,
    });
    try {
      await user.save();
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "School Already Exists",
            },
          ],
        };
      }
    }
    return {
      user,
    };
  }
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { username: options.username } });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "That School does not exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Invalid password",
          },
        ],
      };
    }
    return {
      user,
    };
  }
}
