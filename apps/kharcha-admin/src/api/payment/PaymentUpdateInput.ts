import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  group?: GroupWhereUniqueInput | null;
};
