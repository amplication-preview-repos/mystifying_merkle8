import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  group?: GroupWhereUniqueInput | null;
};
