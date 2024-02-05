import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  // Checks if the user is logged in
  if (!context.req.session.userId) {
    // If not throw an error
    throw new Error("not authenticated");
  }

  return next();
};
