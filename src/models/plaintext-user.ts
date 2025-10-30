import { UserPreferences } from "./user"

type PlainTextUser = {
  wrapped_MDK: string,
  biometric_wrapped: string,
  lastLogin: Date,
  preferences: UserPreferences
}
