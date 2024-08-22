import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customerAddress" multiline source="customerAddress" />
        <TextInput label="customerEmail" source="customerEmail" type="email" />
        <div />
        <TextInput label="customerName" source="customerName" />
        <NumberInput
          step={1}
          label="customerPhoneNumber"
          source="customerPhoneNumber"
        />
        <NumberInput label="totalCost" source="totalCost" />
      </SimpleForm>
    </Create>
  );
};
