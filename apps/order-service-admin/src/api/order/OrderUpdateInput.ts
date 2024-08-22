import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  customerAddress?: string | null;
  customerEmail?: string | null;
  customerMapLocation?: InputJsonValue;
  customerName?: string | null;
  customerPhoneNumber?: number | null;
  totalCost?: number | null;
};
