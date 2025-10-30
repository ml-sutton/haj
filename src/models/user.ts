import { Dosage, Dose } from "./dosages";
import { AccessibilitySettings, DisplaySettings, NotificationSettings, SafetySettings } from "./settings";
import { Test } from "./tests";

type User = {
  userId: string;
  username: string;
  preferences: UserPreferences;
  doses: Dose[]
  dosages: Dosage[]
  tests: Test[]
  pronouns: string
}
type UserPreferences = {
  accessibilitySettings: AccessibilitySettings;
  safetySettings: SafetySettings;
  notificationSettings: NotificationSettings
  displaySettings: DisplaySettings
}

export type {
  User,
  UserPreferences,
}
