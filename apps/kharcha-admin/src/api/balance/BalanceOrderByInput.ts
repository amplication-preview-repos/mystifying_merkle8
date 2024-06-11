import { SortOrder } from "../../util/SortOrder";

export type BalanceOrderByInput = {
  balanceAmount?: SortOrder;
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
