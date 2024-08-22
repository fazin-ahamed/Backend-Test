import { DishUpdateManyWithoutMenusInput } from "./DishUpdateManyWithoutMenusInput";

export type MenuUpdateInput = {
  dishes?: DishUpdateManyWithoutMenusInput;
  name?: string | null;
};
