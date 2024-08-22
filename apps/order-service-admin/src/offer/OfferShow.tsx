import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCOUNTCODE_TITLE_FIELD } from "../discountCode/DiscountCodeTitle";
import { OFFER_TITLE_FIELD } from "./OfferTitle";

export const OfferShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validUntil" source="validUntil" />
        <ReferenceManyField reference="Order" target="offerId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customerAddress" source="customerAddress" />
            <TextField label="customerEmail" source="customerEmail" />
            <TextField
              label="customerMapLocation"
              source="customerMapLocation"
            />
            <TextField label="customerName" source="customerName" />
            <TextField
              label="customerPhoneNumber"
              source="customerPhoneNumber"
            />
            <ReferenceField
              label="discountCode"
              source="discountcode.id"
              reference="DiscountCode"
            >
              <TextField source={DISCOUNTCODE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="offer" source="offer.id" reference="Offer">
              <TextField source={OFFER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="totalCost" source="totalCost" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
