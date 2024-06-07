import { JsonValue } from "type-fest";
import { Rating } from "../rating/Rating";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  preferences: JsonValue;
  ratings?: Array<Rating>;
  roles: JsonValue;
  subscriptionPlan?: SubscriptionPlan | null;
  updatedAt: Date;
  username: string;
};
