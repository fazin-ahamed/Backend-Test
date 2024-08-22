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
import { DISCOUNTCODE_TITLE_FIELD } from "../discountCode/DiscountCodeTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerAddress" source="customerAddress" />
        <TextField label="customerEmail" source="customerEmail" />
        <TextField label="customerMapLocation" source="customerMapLocation" />
        <TextField label="customerName" source="customerName" />
        <TextField label="customerPhoneNumber" source="customerPhoneNumber" />
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
    </List>
  );
};
