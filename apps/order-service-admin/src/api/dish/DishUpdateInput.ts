import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type DishUpdateInput = {
  description?: string | null;
  menu?: MenuWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
