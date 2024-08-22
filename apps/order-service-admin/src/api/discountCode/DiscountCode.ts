import { Order } from "../order/Order";

export type DiscountCode = {
  code: string | null;
  createdAt: Date;
  discountPercentage: number | null;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
