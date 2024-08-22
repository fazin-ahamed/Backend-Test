import { Offer as TOffer } from "../api/offer/Offer";

export const OFFER_TITLE_FIELD = "title";

export const OfferTitle = (record: TOffer): string => {
  return record.title?.toString() || String(record.id);
};
