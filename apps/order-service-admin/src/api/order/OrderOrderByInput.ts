import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerAddress?: SortOrder;
  customerEmail?: SortOrder;
  customerMapLocation?: SortOrder;
  customerName?: SortOrder;
  customerPhoneNumber?: SortOrder;
  id?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
};
