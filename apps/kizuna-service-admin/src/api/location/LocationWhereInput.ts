import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  typeField?: "Option1";
};
