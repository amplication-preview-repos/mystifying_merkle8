import { Group } from "../group/Group";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  group?: Group | null;
  id: string;
  updatedAt: Date;
};
