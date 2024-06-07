import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  NumberInput,
  ReferenceArrayInput,
  SelectInput,
} from "react-admin";

import { RatingTitle } from "../rating/RatingTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="city" source="city" />
        <SelectArrayInput
          label="features"
          source="features"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <TextInput label="postalCode" source="postalCode" />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
