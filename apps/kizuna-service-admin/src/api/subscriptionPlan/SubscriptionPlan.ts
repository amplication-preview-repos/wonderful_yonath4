import { User } from "../user/User";

export type SubscriptionPlan = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
  users?: Array<User>;
};
