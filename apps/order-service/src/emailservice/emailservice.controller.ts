import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EmailServiceService } from "./emailservice.service";
import { MenuFindUniqueArgs } from "../menu/base/MenuFindUniqueArgs";

@swagger.ApiTags("emailServices")
@common.Controller("emailServices")
export class EmailServiceController {
  constructor(protected readonly service: EmailServiceService) {}

  @common.Post("/send-order-confirmation")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendOrderConfirmationEmail(
    @common.Body()
    body: MenuFindUniqueArgs
  ): Promise<boolean> {
        return this.service.SendOrderConfirmationEmail(body);
      }
}
