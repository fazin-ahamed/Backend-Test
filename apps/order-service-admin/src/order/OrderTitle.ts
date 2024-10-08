import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "customerName";

export const OrderTitle = (record: TOrder): string => {
  return record.customerName?.toString() || String(record.id);
};
