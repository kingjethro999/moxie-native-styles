import { ViewStyle, TextStyle, ImageStyle, Platform, Dimensions } from 'react-native';
import { MoxieConfig, MoxieStyles } from './types';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const SPACING_SCALE = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 
  11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
];

const HEX_COLORS: Record<string, string> = {
  gray50: '#F9FAFB', gray100: '#F3F4F6', gray200: '#E5E7EB', gray300: '#D1D5DB', gray400: '#9CA3AF', gray500: '#6B7280', gray600: '#4B5563', gray700: '#374151', gray800: '#1F2937', gray900: '#111827',
  slate50: '#F8FAFC', slate100: '#F1F5F9', slate200: '#E2E8F0', slate300: '#CBD5E1', slate400: '#94A3B8', slate500: '#64748B', slate600: '#475569', slate700: '#334155', slate800: '#1E293B', slate900: '#0F172A',
  blue50: '#EFF6FF', blue100: '#DBEAFE', blue200: '#BFDBFE', blue300: '#93C5FD', blue400: '#60A5FA', blue500: '#3B82F6', blue600: '#2563EB', blue700: '#1D4ED8', blue800: '#1E40AF', blue900: '#1E3A8A',
  red50: '#FEF2F2', red100: '#FEE2E2', red200: '#FECACA', red400: '#F87171', red500: '#EF4444', red600: '#DC2626',
  green50: '#F0FDF4', green100: '#DCFCE7', green200: '#BBF7D0', green400: '#4ADE80', green500: '#22C55E', green600: '#16A34A',
  yellow50: '#FEFCE8', yellow100: '#FEF9C3', yellow400: '#FACC15', yellow500: '#EAB308',
  amber50: '#FFFBEB', amber100: '#FEF3C7', amber400: '#FBBF24', amber500: '#F59E0B',
  violet50: '#F5F3FF', violet100: '#EDE9FE', violet400: '#A78BFA', violet500: '#8B5CF6', violet600: '#7C3AED',
  pink50: '#FDF2F8', pink100: '#FCE7F3', pink400: '#F472B6', pink500: '#EC4899',
  orange50: '#FFF7ED', orange100: '#FFEDD5', orange400: '#FB923C', orange500: '#F97316',
  teal50: '#F0FDFA', teal100: '#CCFBF1', teal400: '#2DD4BF', teal500: '#14B8A6',
  cyan50: '#ECFEFF', cyan100: '#CFFAFE', cyan400: '#22D3EE', cyan500: '#06B6D4',
  indigo50: '#EEF2FF', indigo100: '#E0E7FF', indigo400: '#818CF8', indigo500: '#6366F1', indigo600: '#4F46E5',
};

export function generateStyles(tokens: Required<Omit<MoxieConfig, 'platformIos' | 'platformAndroid' | 'platformWeb'>>, darkMode: boolean): MoxieStyles {
  const s: MoxieStyles = {};

  const bg = darkMode ? tokens.backgroundDark : tokens.background;
  const surface = darkMode ? tokens.surfaceDark : tokens.surface;
  const borderCol = darkMode ? tokens.borderColorDark : tokens.borderColor;

  // --- Spacing ---
  SPACING_SCALE.forEach(n => {
    const val = n * tokens.spacingBase;
    const key = n.toString().replace('.', '_');
    
    s[`m${key}`] = { margin: val };
    s[`mx${key}`] = { marginHorizontal: val };
    s[`my${key}`] = { marginVertical: val };
    s[`mt${key}`] = { marginTop: val };
    s[`mb${key}`] = { marginBottom: val };
    s[`ml${key}`] = { marginLeft: val };
    s[`mr${key}`] = { marginRight: val };
    
    s[`p${key}`] = { padding: val };
    s[`px${key}`] = { paddingHorizontal: val };
    s[`py${key}`] = { paddingVertical: val };
    s[`pt${key}`] = { paddingTop: val };
    s[`pb${key}`] = { paddingBottom: val };
    s[`pl${key}`] = { paddingLeft: val };
    s[`pr${key}`] = { paddingRight: val };
  });

  ['Auto'].forEach(v => {
    s[`m${v}`] = { margin: 'auto' };
    s[`mx${v}`] = { marginHorizontal: 'auto' };
    s[`my${v}`] = { marginVertical: 'auto' };
    s[`mt${v}`] = { marginTop: 'auto' };
    s[`mb${v}`] = { marginBottom: 'auto' };
    s[`ml${v}`] = { marginLeft: 'auto' };
    s[`mr${v}`] = { marginRight: 'auto' };
  });

  // --- Typography ---
  const fontSizes = { Xs: tokens.fontSizeXs, Sm: tokens.fontSizeSm, Base: tokens.fontSizeBase, Md: tokens.fontSizeMd, Lg: tokens.fontSizeLg, Xl: tokens.fontSizeXl, '2xl': tokens.fontSize2xl, '3xl': tokens.fontSize3xl, '4xl': tokens.fontSize4xl, '5xl': tokens.fontSize5xl, '6xl': tokens.fontSize6xl, '7xl': tokens.fontSize7xl, '8xl': 96 };
  Object.entries(fontSizes).forEach(([k, v]) => s[`text${k}`] = { fontSize: v });

  s.fontSans = { fontFamily: tokens.fontFamily };
  s.fontMono = { fontFamily: tokens.fontFamilyMono };
  s.fontSerif = { fontFamily: tokens.fontFamilySerif };

  const weights = { Thin: tokens.fontWeightThin, Extralight: tokens.fontWeightExtraLight, Light: tokens.fontWeightLight, Normal: tokens.fontWeightNormal, Medium: tokens.fontWeightMedium, Semibold: tokens.fontWeightSemibold, Bold: tokens.fontWeightBold, Extrabold: tokens.fontWeightExtrabold, Black: tokens.fontWeightBlack };
  Object.entries(weights).forEach(([k, v]) => s[`font${k}`] = { fontWeight: v });

  s.italic = { fontStyle: 'italic' };
  s.notItalic = { fontStyle: 'normal' };

  s.trackingTighter = { letterSpacing: -1 };
  s.trackingTight = { letterSpacing: tokens.letterSpacingTight };
  s.trackingNormal = { letterSpacing: tokens.letterSpacingNormal };
  s.trackingWide = { letterSpacing: tokens.letterSpacingWide };
  s.trackingWider = { letterSpacing: tokens.letterSpacingWider };
  s.trackingWidest = { letterSpacing: tokens.letterSpacingWidest };

  const lineHeights = { None: 1, Tight: tokens.lineHeightTight, Snug: tokens.lineHeightSnug, Normal: tokens.lineHeightNormal, Relaxed: tokens.lineHeightRelaxed, Loose: tokens.lineHeightLoose };
  Object.entries(lineHeights).forEach(([k, v]) => s[`leading${k}`] = { lineHeight: (s.textBase as TextStyle).fontSize! * v });

  ['Left', 'Center', 'Right', 'Justify', 'Auto'].forEach(v => s[`text${v}`] = { textAlign: v.toLowerCase() as any });
  
  s.underline = { textDecorationLine: 'underline' };
  s.lineThrough = { textDecorationLine: 'line-through' };
  s.underlineThrough = { textDecorationLine: 'underline line-through' };
  s.noUnderline = { textDecorationLine: 'none' };

  ['uppercase', 'lowercase', 'capitalize'].forEach(v => s[v] = { textTransform: v as any });
  s.normalCase = { textTransform: 'none' };

  // --- Colors ---
  const semanticColors: Record<string, string> = {
    Primary: tokens.primary, Secondary: tokens.secondary, Accent: tokens.accent,
    Default: darkMode ? tokens.textInverse : tokens.text, Muted: tokens.textMuted,
    Disabled: tokens.textDisabled, White: '#FFFFFF', Black: '#000000', Inverse: tokens.textInverse,
    Danger: tokens.danger, Success: tokens.success, Warning: tokens.warning, Info: tokens.info,
  };

  Object.entries(semanticColors).forEach(([name, val]) => {
    s[`text${name}`] = { color: val };
    s[`bg${name}`] = { backgroundColor: val };
    s[`border${name}`] = { borderColor: val };
  });

  Object.entries(HEX_COLORS).forEach(([name, val]) => {
    const cap = name.charAt(0).toUpperCase() + name.slice(1);
    s[`text${cap}`] = { color: val };
    s[`bg${cap}`] = { backgroundColor: val };
    s[`border${cap}`] = { borderColor: val };
  });

  s.bgBackground = { backgroundColor: bg };
  s.bgSurface = { backgroundColor: surface };
  s.bgTransparent = { backgroundColor: 'transparent' };
  s.bgOverlay = { backgroundColor: tokens.overlay };

  // --- Borders ---
  s.border0 = { borderWidth: 0 };
  s.border = { borderWidth: tokens.borderWidth, borderColor: borderCol };
  s.border2 = { borderWidth: 2, borderColor: borderCol };
  s.border4 = { borderWidth: 4, borderColor: borderCol };
  s.border8 = { borderWidth: 8, borderColor: borderCol };

  ['T', 'B', 'L', 'R'].forEach(dir => {
    const prop = dir === 'T' ? 'Top' : dir === 'B' ? 'Bottom' : dir === 'L' ? 'Left' : 'Right';
    s[`border${dir}`] = { [`border${prop}Width`]: 1, borderColor: borderCol };
    s[`border${dir}0`] = { [`border${prop}Width`]: 0 };
    s[`border${dir}2`] = { [`border${prop}Width`]: 2, borderColor: borderCol };
    s[`border${dir}4`] = { [`border${prop}Width`]: 4, borderColor: borderCol };
  });

  s.borderSolid = { borderStyle: 'solid' };
  s.borderDashed = { borderStyle: 'dashed' };
  s.borderDotted = { borderStyle: 'dotted' };

  // --- Border Radius ---
  const radiuses = { None: 0, Sm: tokens.radiusSm, '': 8, Md: 8, Lg: 12, Xl: 16, '2xl': 24, '3xl': 32, Full: 9999 };
  Object.entries(radiuses).forEach(([k, v]) => s[`rounded${k}`] = { borderRadius: v });
  
  ['T', 'B', 'L', 'R'].forEach(side => {
    Object.entries(radiuses).forEach(([k, v]) => {
      const props = side === 'T' ? ['TopLeft', 'TopRight'] : side === 'B' ? ['BottomLeft', 'BottomRight'] : side === 'L' ? ['TopLeft', 'BottomLeft'] : ['TopRight', 'BottomRight'];
      s[`rounded${side}${k}`] = { [`border${props[0]}Radius`]: v, [`border${props[1]}Radius`]: v };
    });
  });

  ['Tl', 'Tr', 'Bl', 'Br'].forEach(corner => {
    const prop = corner === 'Tl' ? 'TopLeft' : corner === 'Tr' ? 'TopRight' : corner === 'Bl' ? 'BottomLeft' : 'BottomRight';
    s[`rounded${corner}`] = { [`border${prop}Radius`]: 8 };
    s[`rounded${corner}Full`] = { [`border${prop}Radius`]: 9999 };
  });

  // --- Layout ---
  [1, 2, 3].forEach(n => s[`flex${n}`] = { flex: n });
  s.flexAuto = { flex: -1 };
  s.flexNone = { flex: 0 };
  s.flexShrink = { flexShrink: 1 };
  s.flexShrink0 = { flexShrink: 0 };
  s.flexGrow = { flexGrow: 1 };
  s.flexGrow0 = { flexGrow: 0 };
  s.flexRow = { flexDirection: 'row' };
  s.flexCol = { flexDirection: 'column' };
  s.flexRowReverse = { flexDirection: 'row-reverse' };
  s.flexColReverse = { flexDirection: 'column-reverse' };
  s.flexWrap = { flexWrap: 'wrap' };
  s.flexNoWrap = { flexWrap: 'nowrap' };
  
  ['Start', 'End', 'Center', 'Stretch', 'Baseline'].forEach(v => s[`items${v}`] = { alignItems: v === 'Start' || v === 'End' ? `flex-${v.toLowerCase()}` as any : v.toLowerCase() as any });
  ['Start', 'End', 'Center', 'Between', 'Around', 'Evenly'].forEach(v => s[`justify${v}`] = { justifyContent: v === 'Start' || v === 'End' ? `flex-${v.toLowerCase()}` as any : v === 'Between' || v === 'Around' || v === 'Evenly' ? `space-${v.toLowerCase()}` as any : v.toLowerCase() as any });
  ['Auto', 'Start', 'End', 'Center', 'Stretch', 'Baseline'].forEach(v => s[`self${v}`] = { alignSelf: v === 'Start' || v === 'End' ? `flex-${v.toLowerCase()}` as any : v.toLowerCase() as any });

  s.row = s.flexRow; s.col = s.flexCol;
  s.center = { justifyContent: 'center', alignItems: 'center' };
  s.rowCenter = { ...s.flexRow, ...s.center };
  s.colCenter = { ...s.flexCol, ...s.center };
  s.between = { justifyContent: 'space-between' };
  s.rowBetween = { ...s.flexRow, justifyContent: 'space-between', alignItems: 'center' };

  // --- Sizing ---
  SPACING_SCALE.forEach(n => {
    const val = n * tokens.spacingBase;
    s[`w${n}`] = { width: val };
    s[`h${n}`] = { height: val };
  });
  s.wFull = { width: '100%' }; s.wHalf = { width: '50%' }; s.wAuto = { width: 'auto' };
  s.hFull = { height: '100%' }; s.hHalf = { height: '50%' }; s.hAuto = { height: 'auto' };
  s.wScreen = { width: SCREEN_WIDTH }; s.hScreen = { height: SCREEN_HEIGHT };

  // --- Position ---
  s.absolute = { position: 'absolute' };
  s.relative = { position: 'relative' };
  SPACING_SCALE.slice(0, 15).forEach(n => {
    const val = n * tokens.spacingBase;
    s[`top${n}`] = { top: val }; s[`bottom${n}`] = { bottom: val }; s[`left${n}`] = { left: val }; s[`right${n}`] = { right: val };
  });
  s.topFull = { top: '100%' }; s.bottomFull = { bottom: '100%' }; s.leftFull = { left: '100%' }; s.rightFull = { right: '100%' };
  s.inset0 = { top: 0, right: 0, bottom: 0, left: 0 };
  s.insetX0 = { left: 0, right: 0 }; s.insetY0 = { top: 0, bottom: 0 };

  // --- Z-Index ---
  [0, 10, 20, 30, 40, 50].forEach(n => s[`z${n}`] = { zIndex: n });
  s.zDropdown = { zIndex: 100 }; s.zSticky = { zIndex: 200 }; s.zFixed = { zIndex: 300 };
  s.zBackdrop = { zIndex: 400 }; s.zModal = { zIndex: 500 }; s.zPopover = { zIndex: 600 };
  s.zTooltip = { zIndex: 700 }; s.zToast = { zIndex: 800 }; s.zTop = { zIndex: 999 };

  // --- Opacity ---
  [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].forEach(n => s[`opacity${n}`] = { opacity: n / 100 });

  // --- Gap ---
  SPACING_SCALE.slice(0, 15).forEach(n => {
    const val = n * tokens.spacingBase;
    s[`gap${n}`] = { gap: val };
    s[`gapX${n}`] = { columnGap: val };
    s[`gapY${n}`] = { rowGap: val };
  });

  // --- Aspect Ratio ---
  s.aspectSquare = { aspectRatio: 1 }; s.aspectVideo = { aspectRatio: 16/9 }; s.aspectPortrait = { aspectRatio: 3/4 };

  // --- Icon Sizes ---
  const iconSizes = { Xs: 12, Sm: 16, '': 20, Md: 24, Lg: 32, Xl: 40, '2xl': 48, '3xl': 64 };
  Object.entries(iconSizes).forEach(([k, v]) => s[`icon${k}`] = { width: v, height: v });

  // --- Shadows ---
  const shadows = { Xs: tokens.shadowXs, Sm: tokens.shadowSm, Md: tokens.shadowMd, Lg: tokens.shadowLg, Xl: tokens.shadowXl, '2xl': tokens.shadow2xl };
  Object.entries(shadows).forEach(([k, v]) => s[`shadow${k}`] = v);
  s.shadowNone = { shadowOpacity: 0, elevation: 0 };
  s.shadowPrimary = { ...s.shadowMd, shadowColor: tokens.primary };
  s.shadowDanger = { ...s.shadowMd, shadowColor: tokens.danger };

  // --- Presets ---
  s.container = { paddingHorizontal: 16, width: '100%' };
  s.card = { backgroundColor: surface, borderRadius: 16, ...s.shadowMd, padding: 16, borderWidth: 1, borderColor: borderCol };
  s.btn = { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, ...s.rowCenter, fontWeight: '600', fontSize: 14 };
  s.btnPrimary = { ...s.btn, backgroundColor: tokens.primary, color: '#FFFFFF' };
  s.input = { borderWidth: 1, borderColor: borderCol, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: bg };
  s.badge = { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 9999, fontSize: 10, fontWeight: '600' };
  s.avatar = { borderRadius: 9999, overflow: 'hidden', backgroundColor: HEX_COLORS.gray200 };
  s.divider = { height: 1, borderBottomWidth: 1, borderBottomColor: borderCol, marginVertical: 8 };
  s.skeletonRound = { backgroundColor: HEX_COLORS.gray200, borderRadius: 9999 };

  // --- Glassmorphism ---
  s.glass = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    ...s.shadowSm,
  };
  s.glassDark = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    ...s.shadowSm,
  };
  s.glassPrimary = {
    backgroundColor: tokens.primary + '33', // 20% opacity
    borderWidth: 1,
    borderColor: tokens.primary + '66', // 40% opacity
  };

  return s;
}
