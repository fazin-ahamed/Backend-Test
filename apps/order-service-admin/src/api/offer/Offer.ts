import { Order } from "../order/Order";

export type Offer = {
  createdAt: Date;
  description: string | null;
  id: string;
  orders?: Array<Order>;
  title: string | null;
  updatedAt: Date;
  validUntil: Date | null;
};
