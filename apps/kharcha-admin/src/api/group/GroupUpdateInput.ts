import { BalanceUpdateManyWithoutGroupsInput } from "./BalanceUpdateManyWithoutGroupsInput";
import { ExpenseUpdateManyWithoutGroupsInput } from "./ExpenseUpdateManyWithoutGroupsInput";
import { PaymentUpdateManyWithoutGroupsInput } from "./PaymentUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  balances?: BalanceUpdateManyWithoutGroupsInput;
  description?: string | null;
  expenses?: ExpenseUpdateManyWithoutGroupsInput;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutGroupsInput;
};
