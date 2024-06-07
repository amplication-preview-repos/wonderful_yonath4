import { InputJsonValue } from "../../types";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password: string;
  preferences?: InputJsonValue;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  username: string;
};
