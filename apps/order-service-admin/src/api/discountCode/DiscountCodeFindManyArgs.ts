import { DiscountCodeWhereInput } from "./DiscountCodeWhereInput";
import { DiscountCodeOrderByInput } from "./DiscountCodeOrderByInput";

export type DiscountCodeFindManyArgs = {
  where?: DiscountCodeWhereInput;
  orderBy?: Array<DiscountCodeOrderByInput>;
  skip?: number;
  take?: number;
};
