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
  fontSize: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
  fontWeight: 'normal' | 'medium' | 'bold';
  highContrast: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochrome';
  reduceTransparency: boolean;
  reduceMotion: boolean;
  disableAnimations: boolean;
  dyslexiaFont: boolean;
  buttonSize: 'default' | 'large' | 'x-large';


}
export type {
  AccessibilitySettings,
  NotificationSettings,
  DisplaySettings,
  SafetySettings

}
