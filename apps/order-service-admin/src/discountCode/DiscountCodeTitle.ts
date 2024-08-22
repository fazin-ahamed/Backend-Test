import { DiscountCode as TDiscountCode } from "../api/discountCode/DiscountCode";

export const DISCOUNTCODE_TITLE_FIELD = "code";

export const DiscountCodeTitle = (record: TDiscountCode): string => {
  return record.code?.toString() || String(record.id);
};
