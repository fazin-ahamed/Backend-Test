import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DiscountCodeTitle } from "../discountCode/DiscountCodeTitle";
import { OfferTitle } from "../offer/OfferTitle";

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
        <ReferenceInput
          source="discountCode.id"
          reference="DiscountCode"
          label="discountCode"
        >
          <SelectInput optionText={DiscountCodeTitle} />
        </ReferenceInput>
        <ReferenceInput source="offer.id" reference="Offer" label="offer">
          <SelectInput optionText={OfferTitle} />
        </ReferenceInput>
        <NumberInput label="totalCost" source="totalCost" />
      </SimpleForm>
    </Edit>
  );
};
