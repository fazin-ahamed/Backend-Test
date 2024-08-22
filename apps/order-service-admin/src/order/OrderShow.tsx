import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerAddress" source="customerAddress" />
        <TextField label="customerEmail" source="customerEmail" />
        <TextField label="customerMapLocation" source="customerMapLocation" />
        <TextField label="customerName" source="customerName" />
        <TextField label="customerPhoneNumber" source="customerPhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="totalCost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
