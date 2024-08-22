import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscountCodeModuleBase } from "./base/discountCode.module.base";
import { DiscountCodeService } from "./discountCode.service";
import { DiscountCodeController } from "./discountCode.controller";
import { DiscountCodeResolver } from "./discountCode.resolver";

@Module({
  imports: [DiscountCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscountCodeController],
  providers: [DiscountCodeService, DiscountCodeResolver],
  exports: [DiscountCodeService],
})
export class DiscountCodeModule {}
