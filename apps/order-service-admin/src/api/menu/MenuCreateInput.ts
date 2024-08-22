import { DishCreateNestedManyWithoutMenusInput } from "./DishCreateNestedManyWithoutMenusInput";

export type MenuCreateInput = {
  dishes?: DishCreateNestedManyWithoutMenusInput;
  name?: string | null;
};
