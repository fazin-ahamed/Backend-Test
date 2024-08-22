import { OrderCreateNestedManyWithoutDiscountCodesInput } from "./OrderCreateNestedManyWithoutDiscountCodesInput";

export type DiscountCodeCreateInput = {
  code?: string | null;
  discountPercentage?: number | null;
  orders?: OrderCreateNestedManyWithoutDiscountCodesInput;
};
