import { OrderUpdateManyWithoutOffersInput } from "./OrderUpdateManyWithoutOffersInput";

export type OfferUpdateInput = {
  description?: string | null;
  orders?: OrderUpdateManyWithoutOffersInput;
  title?: string | null;
  validUntil?: Date | null;
};
