import { Balance } from "../balance/Balance";
import { JsonValue } from "type-fest";

export type User = {
  balances?: Array<Balance>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
