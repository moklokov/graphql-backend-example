import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface IDb {
  prisma: PrismaClient;
}

export default { prisma };
