import { JsonValue } from "type-fest";

export type Order = {
  createdAt: Date;
  customerAddress: string | null;
  customerEmail: string | null;
  customerMapLocation: JsonValue;
  customerName: string | null;
  customerPhoneNumber: number | null;
  id: string;
  totalCost: number | null;
  updatedAt: Date;
};
