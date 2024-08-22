import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DiscountCodeWhereUniqueInput } from "../discountCode/DiscountCodeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customerAddress?: StringNullableFilter;
  customerEmail?: StringNullableFilter;
  customerMapLocation?: JsonFilter;
  customerName?: StringNullableFilter;
  customerPhoneNumber?: IntNullableFilter;
  discountCode?: DiscountCodeWhereUniqueInput;
  id?: StringFilter;
  offer?: OfferWhereUniqueInput;
  totalCost?: FloatNullableFilter;
};
