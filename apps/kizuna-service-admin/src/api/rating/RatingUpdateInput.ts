import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  comment?: string | null;
  location?: LocationWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
