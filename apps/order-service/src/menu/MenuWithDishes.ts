import { ObjectType, Field } from "@nestjs/graphql";
import { Menu } from "./base/Menu";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { MenuCreateInput } from "./base/MenuCreateInput";

@ObjectType("MenuWithDishesObject")
class MenuWithDishes {
    @Field(() => [Menu])
    @ApiProperty({
        required: true,
        type: () => [Menu]
    })
    @Type(() => Menu)
    menus!: Menu;

    @Field(() => [MenuCreateInput])
    @ApiProperty({
        required: true,
        type: () => [MenuCreateInput]
    })
    @Type(() => MenuCreateInput)
    dishes!: MenuCreateInput;
}

export { MenuWithDishes as MenuWithDishes };