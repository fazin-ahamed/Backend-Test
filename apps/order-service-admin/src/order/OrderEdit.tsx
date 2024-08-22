import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
