export const STORAGE_KEYS = {
  WRAPPED_MDK: '@haj:wrapped_MDK',
  BIOMETRIC_WRAPPED: '@haj:biometric_wrapped',
  LAST_LOGIN: '@haj:lastLogin',

  SAFETY_QUICK_EXIT_ENABLED: '@haj:safety:quickExitEnabled',
  SAFETY_DISCRETE_MODE: '@haj:safety:discreteMode',
  SAFETY_SILENT_MODE: '@haj:safety:silentMode',
  SAFETY_BIOMETRIC_ENABLED: '@haj:safety:biometricEnabled',
  SAFETY_AUTO_LOCK_TIMEOUT: '@haj:safety:autoLockTimeout',

  NOTIF_ENABLED: '@haj:notif:enabled',
  NOTIF_REMINDER_SOUND: '@haj:notif:reminderSound',
  NOTIF_VIBRATION: '@haj:notif:vibration',
  NOTIF_DISCRETE: '@haj:notif:discreteNotifications',

  DISPLAY_THEME: '@haj:display:theme',
  DISPLAY_DISCRETE_MODE: '@haj:display:discreteMode',

  A11Y_FONT_SIZE: '@haj:a11y:fontSize',
  A11Y_FONT_WEIGHT: '@haj:a11y:fontWeight',
  A11Y_HIGH_CONTRAST: '@haj:a11y:highContrast',
  A11Y_COLOR_BLIND_MODE: '@haj:a11y:colorBlindMode',
  A11Y_REDUCE_TRANSPARENCY: '@haj:a11y:reduceTransparency',
  A11Y_REDUCE_MOTION: '@haj:a11y:reduceMotion',
  A11Y_DISABLE_ANIMATIONS: '@haj:a11y:disableAnimations',
  A11Y_DYSLEXIA_FONT: '@haj:a11y:dyslexiaFont',
  A11Y_BUTTON_SIZE: '@haj:a11y:buttonSize',
} as const;
