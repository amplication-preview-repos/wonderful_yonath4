import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ratings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
