import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LOCATION_TITLE_FIELD } from "./LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="features" source="features" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Rating"
          target="locationId"
          label="Ratings"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
