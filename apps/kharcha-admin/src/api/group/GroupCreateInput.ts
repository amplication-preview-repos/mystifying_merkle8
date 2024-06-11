import { BalanceCreateNestedManyWithoutGroupsInput } from "./BalanceCreateNestedManyWithoutGroupsInput";
import { ExpenseCreateNestedManyWithoutGroupsInput } from "./ExpenseCreateNestedManyWithoutGroupsInput";
import { PaymentCreateNestedManyWithoutGroupsInput } from "./PaymentCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  balances?: BalanceCreateNestedManyWithoutGroupsInput;
  description?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutGroupsInput;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutGroupsInput;
};
