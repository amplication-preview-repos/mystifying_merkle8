import { Group } from "../group/Group";
import { User } from "../user/User";

export type Balance = {
  balanceAmount: number | null;
  createdAt: Date;
  group?: Group | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
