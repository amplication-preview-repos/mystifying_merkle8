import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceWhereInput = {
  balanceAmount?: FloatNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
