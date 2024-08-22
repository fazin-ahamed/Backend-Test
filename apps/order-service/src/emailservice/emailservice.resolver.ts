import * as graphql from "@nestjs/graphql";
import { MenuFindUniqueArgs } from "../menu/base/MenuFindUniqueArgs";
import { EmailServiceService } from "./emailservice.service";

export class EmailServiceResolver {
  constructor(protected readonly service: EmailServiceService) {}

  @graphql.Mutation(() => Boolean)
  async SendOrderConfirmationEmail(
    @graphql.Args()
    args: MenuFindUniqueArgs
  ): Promise<boolean> {
    return this.service.SendOrderConfirmationEmail(args);
  }
}
