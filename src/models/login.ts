import { Preferences } from "./preferences";

type Login = {
  wrapped_MDK: string,
  biometric_wrapped: string,
  lastLogin: Date,
  preferences: Preferences
}
export type {
  Login
}