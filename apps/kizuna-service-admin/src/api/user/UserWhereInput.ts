import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  preferences?: JsonFilter;
  ratings?: RatingListRelationFilter;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
  username?: StringFilter;
};
