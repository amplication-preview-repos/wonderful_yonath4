import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
