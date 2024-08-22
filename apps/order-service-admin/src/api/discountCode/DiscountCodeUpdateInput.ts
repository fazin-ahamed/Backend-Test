import { OrderUpdateManyWithoutDiscountCodesInput } from "./OrderUpdateManyWithoutDiscountCodesInput";

export type DiscountCodeUpdateInput = {
  code?: string | null;
  discountPercentage?: number | null;
  orders?: OrderUpdateManyWithoutDiscountCodesInput;
};
