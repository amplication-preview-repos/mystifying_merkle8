import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceCreateInput = {
  balanceAmount?: number | null;
  group?: GroupWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
