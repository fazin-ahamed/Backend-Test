import { JsonValue } from "type-fest";
import { DiscountCode } from "../discountCode/DiscountCode";
import { Offer } from "../offer/Offer";

export type Order = {
  createdAt: Date;
  customerAddress: string | null;
  customerEmail: string | null;
  customerMapLocation: JsonValue;
  customerName: string | null;
  customerPhoneNumber: number | null;
  discountCode?: DiscountCode | null;
  id: string;
  offer?: Offer | null;
  totalCost: number | null;
  updatedAt: Date;
};
