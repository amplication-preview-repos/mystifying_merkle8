import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ExpenseCreateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  group?: GroupWhereUniqueInput | null;
};
