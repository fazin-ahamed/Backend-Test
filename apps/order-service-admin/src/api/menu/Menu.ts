import { Dish } from "../dish/Dish";

export type Menu = {
  createdAt: Date;
  dishes?: Array<Dish>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
