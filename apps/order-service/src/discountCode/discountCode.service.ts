import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountCodeServiceBase } from "./base/discountCode.service.base";

@Injectable()
export class DiscountCodeService extends DiscountCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
