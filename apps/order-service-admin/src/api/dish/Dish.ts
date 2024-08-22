import { Menu } from "../menu/Menu";

export type Dish = {
  createdAt: Date;
  description: string | null;
  id: string;
  menu?: Menu | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
