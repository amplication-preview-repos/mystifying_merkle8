import { Group } from "../group/Group";

export type Expense = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  group?: Group | null;
  id: string;
  updatedAt: Date;
};
