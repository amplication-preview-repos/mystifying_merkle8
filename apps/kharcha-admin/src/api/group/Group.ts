import { Balance } from "../balance/Balance";
import { Expense } from "../expense/Expense";
import { Payment } from "../payment/Payment";

export type Group = {
  balances?: Array<Balance>;
  createdAt: Date;
  description: string | null;
  expenses?: Array<Expense>;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  updatedAt: Date;
};
