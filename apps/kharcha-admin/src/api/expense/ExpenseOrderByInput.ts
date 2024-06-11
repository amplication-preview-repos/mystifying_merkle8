import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
