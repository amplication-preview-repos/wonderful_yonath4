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
import { Rating } from "./Rating";
import { RatingCountArgs } from "./RatingCountArgs";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingFindUniqueArgs } from "./RatingFindUniqueArgs";
import { CreateRatingArgs } from "./CreateRatingArgs";
import { UpdateRatingArgs } from "./UpdateRatingArgs";
import { DeleteRatingArgs } from "./DeleteRatingArgs";
import { Location } from "../../location/base/Location";
import { User } from "../../user/base/User";
import { RatingService } from "../rating.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rating)
export class RatingResolverBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async _ratingsMeta(
    @graphql.Args() args: RatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Rating])
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async ratings(@graphql.Args() args: RatingFindManyArgs): Promise<Rating[]> {
    return this.service.ratings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Rating, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  async rating(
    @graphql.Args() args: RatingFindUniqueArgs
  ): Promise<Rating | null> {
    const result = await this.service.rating(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  async createRating(@graphql.Args() args: CreateRatingArgs): Promise<Rating> {
    return await this.service.createRating({
      ...args,
      data: {
        ...args.data,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  async updateRating(
    @graphql.Args() args: UpdateRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.updateRating({
        ...args,
        data: {
          ...args.data,

          location: args.data.location
            ? {
                connect: args.data.location,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Rating)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  async deleteRating(
    @graphql.Args() args: DeleteRatingArgs
  ): Promise<Rating | null> {
    try {
      return await this.service.deleteRating(args);
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
  @graphql.ResolveField(() => Location, {
    nullable: true,
    name: "location",
  })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async getLocation(
    @graphql.Parent() parent: Rating
  ): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Rating): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
