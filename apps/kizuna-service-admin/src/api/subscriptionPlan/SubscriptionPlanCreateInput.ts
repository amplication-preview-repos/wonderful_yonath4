import { UserCreateNestedManyWithoutSubscriptionPlansInput } from "./UserCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  users?: UserCreateNestedManyWithoutSubscriptionPlansInput;
};
