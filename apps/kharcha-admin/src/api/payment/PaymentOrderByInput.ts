import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
