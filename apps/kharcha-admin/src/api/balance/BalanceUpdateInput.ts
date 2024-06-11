import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceUpdateInput = {
  balanceAmount?: number | null;
  group?: GroupWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
