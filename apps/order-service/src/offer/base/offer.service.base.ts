/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Offer as PrismaOffer,
  Order as PrismaOrder,
} from "@prisma/client";

export class OfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OfferCountArgs, "select">): Promise<number> {
    return this.prisma.offer.count(args);
  }

  async offers(args: Prisma.OfferFindManyArgs): Promise<PrismaOffer[]> {
    return this.prisma.offer.findMany(args);
  }
  async offer(args: Prisma.OfferFindUniqueArgs): Promise<PrismaOffer | null> {
    return this.prisma.offer.findUnique(args);
  }
  async createOffer(args: Prisma.OfferCreateArgs): Promise<PrismaOffer> {
    return this.prisma.offer.create(args);
  }
  async updateOffer(args: Prisma.OfferUpdateArgs): Promise<PrismaOffer> {
    return this.prisma.offer.update(args);
  }
  async deleteOffer(args: Prisma.OfferDeleteArgs): Promise<PrismaOffer> {
    return this.prisma.offer.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.offer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}
