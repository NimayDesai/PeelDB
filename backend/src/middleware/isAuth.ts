import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  // If not logged in throw an error saying not authenticated
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }

  return next();
};
