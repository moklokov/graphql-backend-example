import { PrismaClient } from "@prisma/client";
import { decodeAuthHeader, AuthTokenPayload } from "./auth";
import { Request } from "express";

const prisma = new PrismaClient();

export interface IContext {
  prisma: PrismaClient;
  userId?: number;
}

const context = ({ req }: { req: Request }): IContext => {
  const token: AuthTokenPayload | null =
    req && req.headers.authorization ? decodeAuthHeader(req.headers.authorization) : null;

  return {
    prisma,
    userId: token?.userId,
  };
};

export default context;
