import { RatingCreateNestedManyWithoutLocationsInput } from "./RatingCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  city?: string | null;
  features?: Array<"Option1">;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  postalCode?: string | null;
  ratings?: RatingCreateNestedManyWithoutLocationsInput;
  typeField?: "Option1" | null;
};
