import { RatingUpdateManyWithoutLocationsInput } from "./RatingUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  city?: string | null;
  features?: Array<"Option1">;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  postalCode?: string | null;
  ratings?: RatingUpdateManyWithoutLocationsInput;
  typeField?: "Option1" | null;
};
