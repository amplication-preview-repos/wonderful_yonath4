import { Rating } from "../rating/Rating";

export type Location = {
  address: string | null;
  city: string | null;
  createdAt: Date;
  features?: Array<"Option1">;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  postalCode: string | null;
  ratings?: Array<Rating>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
