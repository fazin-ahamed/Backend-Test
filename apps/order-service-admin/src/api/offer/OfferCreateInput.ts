import { OrderCreateNestedManyWithoutOffersInput } from "./OrderCreateNestedManyWithoutOffersInput";

export type OfferCreateInput = {
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutOffersInput;
  title?: string | null;
  validUntil?: Date | null;
};
