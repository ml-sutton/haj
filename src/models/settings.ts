type SafetySettings = {
  quickExitEnabled: boolean;
  discreteMode: boolean;
  silentMode: boolean;
  biometricEnabled: boolean;
  autoLockTimeout: number;
}
type NotificationSettings = {
  enabled: boolean;
  reminderSound: boolean;
  vibration: boolean;
  discreteNotifications: boolean;
}
type DisplaySettings = {
  theme: 'light' | 'dark' | 'dark solarized' | 'high-contrast dark' | 'system';
  discreteMode: boolean;
}
type AccessibilitySettings = {
  highContrast: boolean;
  hapticFeedback: boolean;
  reduceMotion: boolean;
}
export type {
  AccessibilitySettings,
  NotificationSettings,
  DisplaySettings,
  SafetySettings

}
