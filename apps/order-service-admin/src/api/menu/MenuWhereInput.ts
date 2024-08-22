import { DishListRelationFilter } from "../dish/DishListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MenuWhereInput = {
  dishes?: DishListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
