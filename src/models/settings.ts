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
  theme: 'light' | 'dark' | 'system';
  discreteMode: boolean;
}
type AccessibilitySettings = {
  fontSize: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
  fontWeight: 'normal' | 'medium' | 'bold';
  highContrast: boolean;
  reduceTransparency: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochrome';

  reduceMotion: boolean;
  disableAnimations: boolean;

  screenReaderOptimized: boolean;
  verboseDescriptions: boolean;
  announceNotifications: boolean;

  hapticFeedback: boolean;
  buttonSize: 'default' | 'large' | 'x-large';

  dyslexiaFont: boolean;
  increaseLineSpacing: boolean;
  increaseLetterSpacing: boolean;
  textAlign: 'left' | 'center' | 'justify';

}
export type {
  AccessibilitySettings,
  NotificationSettings,
  DisplaySettings,
  SafetySettings

}
