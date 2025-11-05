import { AccessibilitySettings, DisplaySettings, NotificationSettings, SafetySettings } from "./settings";

type Preferences = {
  accessibilitySettings: AccessibilitySettings;
  safetySettings: SafetySettings;
  notificationSettings: NotificationSettings
  displaySettings: DisplaySettings
}

export type {
  Preferences
}