import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type DishCreateInput = {
  description?: string | null;
  menu?: MenuWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
