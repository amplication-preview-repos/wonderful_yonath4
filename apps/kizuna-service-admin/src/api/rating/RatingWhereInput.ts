import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
