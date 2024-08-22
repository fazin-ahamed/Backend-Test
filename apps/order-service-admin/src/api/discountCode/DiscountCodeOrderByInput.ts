import { SortOrder } from "../../util/SortOrder";

export type DiscountCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discountPercentage?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
