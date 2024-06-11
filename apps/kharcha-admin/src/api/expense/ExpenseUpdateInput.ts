import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  group?: GroupWhereUniqueInput | null;
};
