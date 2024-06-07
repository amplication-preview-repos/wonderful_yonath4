import { UserUpdateManyWithoutSubscriptionPlansInput } from "./UserUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  users?: UserUpdateManyWithoutSubscriptionPlansInput;
};
