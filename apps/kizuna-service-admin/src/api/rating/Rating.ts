import { Location } from "../location/Location";
import { User } from "../user/User";

export type Rating = {
  comment: string | null;
  createdAt: Date;
  id: string;
  location?: Location | null;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
