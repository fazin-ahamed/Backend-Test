import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customerAddress?: StringNullableFilter;
  customerEmail?: StringNullableFilter;
  customerMapLocation?: JsonFilter;
  customerName?: StringNullableFilter;
  customerPhoneNumber?: IntNullableFilter;
  id?: StringFilter;
  totalCost?: FloatNullableFilter;
};
