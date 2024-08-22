import { InputJsonValue } from "../../types";
import { DiscountCodeWhereUniqueInput } from "../discountCode/DiscountCodeWhereUniqueInput";
import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";

export type OrderCreateInput = {
  customerAddress?: string | null;
  customerEmail?: string | null;
  customerMapLocation?: InputJsonValue;
  customerName?: string | null;
  customerPhoneNumber?: number | null;
  discountCode?: DiscountCodeWhereUniqueInput | null;
  offer?: OfferWhereUniqueInput | null;
  totalCost?: number | null;
};
