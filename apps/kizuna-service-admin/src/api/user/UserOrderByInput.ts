import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  preferences?: SortOrder;
  roles?: SortOrder;
  subscriptionPlanId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
