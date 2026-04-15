import { ViewStyle, TextStyle, ImageStyle, TransformsStyle } from 'react-native';

export interface MoxieConfig {
  // Brand Colors
  primary?: string;
  primaryLight?: string;
  primaryDark?: string;
  secondary?: string;
  secondaryLight?: string;
  secondaryDark?: string;
  accent?: string;
  accentLight?: string;
  accentDark?: string;

  // Semantic Colors
  danger?: string;
  dangerLight?: string;
  dangerDark?: string;
  success?: string;
  successLight?: string;
  successDark?: string;
  warning?: string;
  warningLight?: string;
  warningDark?: string;
  info?: string;
  infoLight?: string;
  infoDark?: string;

  // Neutral Colors
  background?: string;
  backgroundDark?: string;
  surface?: string;
  surfaceDark?: string;
  overlay?: string;
  overlayLight?: string;
  overlayDark?: string;

  // Text Colors
  text?: string;
  textMuted?: string;
  textDisabled?: string;
  textInverse?: string;
  textDanger?: string;
  textSuccess?: string;
  textWarning?: string;
  textInfo?: string;

  // Border
  borderColor?: string;
  borderColorDark?: string;
  borderWidth?: number;
  borderWidthMd?: number;
  borderWidthLg?: number;

  // Border Radius
  borderRadiusBase?: number;
  radiusNone?: number;
  radiusSm?: number;
  radiusMd?: number;
  radiusLg?: number;
  radiusXl?: number;
  radius2xl?: number;
  radius3xl?: number;
  radiusFull?: number;

  // Spacing
  spacingBase?: number;

  // Typography
  fontFamily?: string;
  fontFamilyMono?: string;
  fontFamilySerif?: string;
  fontSizeXs?: number;
  fontSizeSm?: number;
  fontSizeBase?: number;
  fontSizeMd?: number;
  fontSizeLg?: number;
  fontSizeXl?: number;
  fontSize2xl?: number;
  fontSize3xl?: number;
  fontSize4xl?: number;
  fontSize5xl?: number;
  fontSize6xl?: number;
  fontSize7xl?: number;
  fontWeightThin?: TextStyle['fontWeight'];
  fontWeightExtraLight?: TextStyle['fontWeight'];
  fontWeightLight?: TextStyle['fontWeight'];
  fontWeightNormal?: TextStyle['fontWeight'];
  fontWeightMedium?: TextStyle['fontWeight'];
  fontWeightSemibold?: TextStyle['fontWeight'];
  fontWeightBold?: TextStyle['fontWeight'];
  fontWeightExtrabold?: TextStyle['fontWeight'];
  fontWeightBlack?: TextStyle['fontWeight'];
  lineHeightTight?: number;
  lineHeightSnug?: number;
  lineHeightNormal?: number;
  lineHeightRelaxed?: number;
  lineHeightLoose?: number;
  letterSpacingTight?: number;
  letterSpacingNormal?: number;
  letterSpacingWide?: number;
  letterSpacingWider?: number;
  letterSpacingWidest?: number;

  // Shadows
  shadowColor?: string;
  shadowColorPrimary?: string;
  shadowXs?: ViewStyle;
  shadowSm?: ViewStyle;
  shadowMd?: ViewStyle;
  shadowLg?: ViewStyle;
  shadowXl?: ViewStyle;
  shadow2xl?: ViewStyle;

  // Animation
  durationFast?: number;
  durationNormal?: number;
  durationSlow?: number;
  durationSlower?: number;
  easingDefault?: string;

  // Z-Index
  zIndexBase?: number;
  zIndexDropdown?: number;
  zIndexSticky?: number;
  zIndexFixed?: number;
  zIndexModalBackdrop?: number;
  zIndexModal?: number;
  zIndexPopover?: number;
  zIndexTooltip?: number;
  zIndexToast?: number;
  zIndexTop?: number;

  // Opacity
  opacity0?: number;
  opacity5?: number;
  opacity10?: number;
  opacity20?: number;
  opacity25?: number;
  opacity30?: number;
  opacity40?: number;
  opacity50?: number;
  opacity60?: number;
  opacity70?: number;
  opacity75?: number;
  opacity80?: number;
  opacity90?: number;
  opacity95?: number;
  opacity100?: number;

  // Platform Overrides
  platformIos?: Partial<MoxieConfig>;
  platformAndroid?: Partial<MoxieConfig>;
  platformWeb?: Partial<MoxieConfig>;
}

export type MoxieStyles = Record<string, ViewStyle | TextStyle | ImageStyle>;

export interface MoxieContextType {
  s: MoxieStyles;
  tokens: Required<Omit<MoxieConfig, 'platformIos' | 'platformAndroid' | 'platformWeb'>>;
  platform: 'ios' | 'android' | 'web';
  darkMode: boolean;
}
