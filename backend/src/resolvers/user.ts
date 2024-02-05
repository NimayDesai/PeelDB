import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import argon2 from "argon2";
import { MyContext } from "src/types";

// Add an input for logging in
@InputType()
class UsernamePasswordEmailInput {
  @Field()
  usernameOrEmail: string;
  @Field()
  password: string;
}
// Add an input for registering
@InputType()
class RegisterInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  confirmPassword: string;
}
// Add an objectype for handling Error
@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

// Add UserId to express.session
declare module "express-session" {
  export interface SessionData {
    user: { [key: string]: any };
    userId: number;
  }
}

// Add a user Response ObjectType which is returned after a mutation/query
@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]; // Can be null if no errors

  @Field(() => User, { nullable: true })
  user?: User; // Can be null if no data is returned
}

@Resolver(User)
export class UserResolver {
  // Return this FieldResolver when the program fetches the email
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (req.session.userId === user.id) {
      // Check if the email of the user logged in is the same as the email fetched
      return user.email;
    }

    return ""; // If not, return an empty string
  }
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      // Check if the user is logged in
      return null;
    }

    const user = await User.findOne({ where: { id: req.session.userId } }); // Return the user currently logged in
  }
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: RegisterInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      // Check if the username is too short
      return {
        errors: [
          {
            field: "username",
            message: "Length must be greater than 2",
          },
        ],
      };
    }
    if (!options.email.includes("@")) {
      // Check if the email is valid
      return {
        errors: [
          {
            field: "email",
            message: "Email must include at sign",
          },
        ],
      };
    }
    if (options.password.length <= 2) {
      // Check if the password is too short
      return {
        errors: [
          {
            field: "password",
            message: "Length Must be greater than 2",
          },
        ],
      };
    }
    if (options.password !== options.confirmPassword) {
      // Check if the password and confirmPassword are the same
      return {
        errors: [
          {
            field: "confirmPassword",
            message: "Passwords do not match",
          },
        ],
      };
    }

    if (options.username.includes("@")) {
      // Check if the username includes an at sign
      return {
        errors: [
          {
            field: "username",
            message: "Username cannot include at sign",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password); // Hash the password so the password in the data base is not plain text
    const user = User.create({
      // Create a user with the Input Values
      username: options.username,
      password: hashedPassword,
      email: options.email,
    });
    try {
      await user.save(); // Try to add the user to the database
    } catch (err) {
      if (err.code === "23505") {
        // The Username/Email is already taken
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

    req.session.userId = user.id; // Make the user automatically logged in after they register
    return {
      // Return the user
      user,
    };
  }
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordEmailInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({
      // If userNameorEmail includes an at sign, assume user is typing an email else assume user is typing username
      where: options.usernameOrEmail.includes("@")
        ? { email: options.usernameOrEmail }
        : { username: options.usernameOrEmail },
    });
    if (!user) {
      // If there is no user with the values specificed
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "That School does not exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password); // Check if the password is valid
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

    req.session!.userId = user.id; // Log in the user by saving a cookie, and Redis Session
    return {
      user,
    };
  }
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        // Destroy the Redis Session
        res.clearCookie("qid"); // Destroy the cookie
        if (err) {
          // If there is an error return false
          resolve(false);
          return;
        }

        resolve(true);
      });
    });
  }
}
