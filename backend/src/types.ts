import { Request, Response } from "express";
import session from "express-session";

export type MyContext = {
  req: Request & { session: session.Session & Partial<session.SessionData> };
  res: Response;
};
