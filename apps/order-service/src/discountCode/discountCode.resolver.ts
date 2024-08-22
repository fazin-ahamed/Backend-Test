import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiscountCodeResolverBase } from "./base/discountCode.resolver.base";
import { DiscountCode } from "./base/DiscountCode";
import { DiscountCodeService } from "./discountCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountCode)
export class DiscountCodeResolver extends DiscountCodeResolverBase {
  constructor(
    protected readonly service: DiscountCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
