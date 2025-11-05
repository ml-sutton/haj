import { Dosage, Dose } from "./dosages";
import { Test } from "./tests";

type User = {
  username: string;
  dosages: Dosage[]
  tests: Test[]
  pronouns: string
}


export type {
  User,
}
