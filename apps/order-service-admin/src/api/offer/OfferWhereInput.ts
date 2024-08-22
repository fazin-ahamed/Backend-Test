import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OfferWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  title?: StringNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
