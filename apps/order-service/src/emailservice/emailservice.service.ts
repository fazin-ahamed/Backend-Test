import { Injectable } from "@nestjs/common";
import { MenuFindUniqueArgs } from "../menu/base/MenuFindUniqueArgs";

@Injectable()
export class EmailServiceService {
  constructor() {}
  async SendOrderConfirmationEmail(args: MenuFindUniqueArgs): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
