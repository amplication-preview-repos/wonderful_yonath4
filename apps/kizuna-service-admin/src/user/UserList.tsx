import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="preferences" source="preferences" />
        <TextField label="Roles" source="roles" />
        <ReferenceField
          label="subscriptionPlan"
          source="subscriptionplan.id"
          reference="SubscriptionPlan"
        >
          <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
