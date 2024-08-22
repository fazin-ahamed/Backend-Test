import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type DiscountCodeWhereInput = {
  code?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
};
