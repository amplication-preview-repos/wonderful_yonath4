import { InputJsonValue } from "../../types";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password?: string;
  preferences?: InputJsonValue;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  username?: string;
};
