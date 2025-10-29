import { Pronouns } from "./pronouns";
import { AccessibilitySettings, DisplaySettings, NotificationSettings, SafetySettings } from "./settings";

type User = {
  userId: string;
  username: string;
  preferences: UserPreferences;
}
type UserPreferences = {
  accessibilitySettings: AccessibilitySettings;
  safetySettings: SafetySettings;
  notificationSettings: NotificationSettings
  displaySettings: DisplaySettings
  pronouns: Pronouns
}

export type {
  User,
  UserPreferences,
}
