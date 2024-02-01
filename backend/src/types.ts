import { Request, Response, Express } from "express";
import session, { Session, SessionData } from "express-session";

export type ContactInfo = {
  phoneNumber: string;
  address: string;
  email: string;
};

export type MyContext = {
  req: Request & { session: session.Session & Partial<session.SessionData> };
  res: Response;
};
