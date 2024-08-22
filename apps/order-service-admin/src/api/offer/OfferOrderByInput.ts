import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
