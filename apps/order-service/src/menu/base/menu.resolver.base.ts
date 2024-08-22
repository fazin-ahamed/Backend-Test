/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Menu } from "./Menu";
import { MenuCountArgs } from "./MenuCountArgs";
import { MenuFindManyArgs } from "./MenuFindManyArgs";
import { MenuFindUniqueArgs } from "./MenuFindUniqueArgs";
import { CreateMenuArgs } from "./CreateMenuArgs";
import { UpdateMenuArgs } from "./UpdateMenuArgs";
import { DeleteMenuArgs } from "./DeleteMenuArgs";
import { DishFindManyArgs } from "../../dish/base/DishFindManyArgs";
import { Dish } from "../../dish/base/Dish";
import { MenuWhereInput } from "./MenuWhereInput";
import { MenuWithDishes } from "../MenuWithDishes";
import { MenuService } from "../menu.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Menu)
export class MenuResolverBase {
  constructor(
    protected readonly service: MenuService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async _menusMeta(
    @graphql.Args() args: MenuCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Menu])
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async menus(@graphql.Args() args: MenuFindManyArgs): Promise<Menu[]> {
    return this.service.menus(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Menu, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "own",
  })
  async menu(@graphql.Args() args: MenuFindUniqueArgs): Promise<Menu | null> {
    const result = await this.service.menu(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "create",
    possession: "any",
  })
  async createMenu(@graphql.Args() args: CreateMenuArgs): Promise<Menu> {
    return await this.service.createMenu({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async updateMenu(@graphql.Args() args: UpdateMenuArgs): Promise<Menu | null> {
    try {
      return await this.service.updateMenu({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "delete",
    possession: "any",
  })
  async deleteMenu(@graphql.Args() args: DeleteMenuArgs): Promise<Menu | null> {
    try {
      return await this.service.deleteMenu(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Dish], { name: "dishes" })
  @nestAccessControl.UseRoles({
    resource: "Dish",
    action: "read",
    possession: "any",
  })
  async findDishes(
    @graphql.Parent() parent: Menu,
    @graphql.Args() args: DishFindManyArgs
  ): Promise<Dish[]> {
    const results = await this.service.findDishes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Query(() => [MenuWithDishes])
  async GetMenusWithDishes(
    @graphql.Args()
    args: MenuWhereInput
  ): Promise<MenuWithDishes[]> {
    return this.service.GetMenusWithDishes(args);
  }
}
