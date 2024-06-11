import { BalanceListRelationFilter } from "../balance/BalanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type GroupWhereInput = {
  balances?: BalanceListRelationFilter;
  description?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
};
