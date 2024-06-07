import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  postalCode?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
