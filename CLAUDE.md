# moxie-native-styles

> **900+ predefined styles for React Native — configured once, applied everywhere.**

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [moxie.config.ts](#moxieconfigts)
- [The `<Moxie>` Provider](#the-moxie-provider)
- [Style Reference (900+ Styles)](#style-reference)
  - [Spacing](#spacing)
  - [Typography](#typography)
  - [Colors & Backgrounds](#colors--backgrounds)
  - [Borders](#borders)
  - [Border Radius](#border-radius)
  - [Shadows & Elevation](#shadows--elevation)
  - [Flex & Layout](#flex--layout)
  - [Sizing](#sizing)
  - [Opacity](#opacity)
  - [Position](#position)
  - [Z-Index](#z-index)
  - [Transform](#transform)
  - [Overflow](#overflow)
  - [Display](#display)
  - [Gap](#gap)
  - [Aspect Ratio](#aspect-ratio)
  - [Text Decoration](#text-decoration)
  - [Text Transform](#text-transform)
  - [Font Weight](#font-weight)
  - [Font Style](#font-style)
  - [Letter Spacing](#letter-spacing)
  - [Line Height](#line-height)
  - [Text Align](#text-align)
  - [Icon Sizes](#icon-sizes)
  - [Component Presets](#component-presets)
- [Internal Moxie Variables](#internal-moxie-variables)
- [Platform Behavior](#platform-behavior)
- [TypeScript Support](#typescript-support)
- [Advanced Usage](#advanced-usage)
- [Changelog](#changelog)

---

## Overview

**moxie-native-styles** is a zero-runtime, fully typed styling utility for React Native. It ships with **900+ predefined style tokens** that map to an internal design system. Wrap your root layout once with `<Moxie>` and every component in your app gets access to the global style registry.

Under the hood, moxie uses `Platform` from React Native to conditionally adjust values per OS (iOS, Android, Web). Users configure all design tokens once inside `moxie.config.ts` and the styles auto-update across the entire app.

**Primary color:** `#2563EB` (Blue 600)

---

## Installation

```bash
# npm
npm install moxie-native-styles

# yarn
yarn add moxie-native-styles

# pnpm
pnpm add moxie-native-styles
```

> **Peer Dependencies:** `react >= 18.0.0`, `react-native >= 0.72.0`

---

## Quick Start

### 1. Create your config

```ts
// moxie.config.ts
import { defineMoxieConfig } from 'moxie-native-styles';

export default defineMoxieConfig({
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#F59E0B',
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#0F172A',
  textMuted: '#64748B',
  danger: '#EF4444',
  success: '#22C55E',
  warning: '#F59E0B',
  info: '#3B82F6',
  borderColor: '#E2E8F0',
  fontFamily: 'System',
  fontFamilyMono: 'Courier',
  borderRadiusBase: 8,
  spacingBase: 4,
});
```

### 2. Wrap your root layout

```tsx
// app/_layout.tsx  (Expo Router)
// or App.tsx       (bare React Native)

import { Moxie } from 'moxie-native-styles';
import moxieConfig from './moxie.config';

export default function RootLayout({ children }) {
  return (
    <Moxie config={moxieConfig}>
      {children}
    </Moxie>
  );
}
```

### 3. Use styles anywhere

```tsx
import { useMoxie } from 'moxie-native-styles';

export default function MyComponent() {
  const { s } = useMoxie();

  return (
    <View style={[s.flex1, s.bgPrimary, s.px4, s.py6, s.roundedXl]}>
      <Text style={[s.textWhite, s.textXl, s.fontBold]}>
        Hello, Moxie!
      </Text>
    </View>
  );
}
```

---

## moxie.config.ts

All internal Moxie variables are customizable. Below is the **full config schema** with default values.

```ts
import { defineMoxieConfig } from 'moxie-native-styles';

export default defineMoxieConfig({
  // ─── Brand Colors ───────────────────────────────────────────────
  primary:            '#2563EB',   // Blue 600
  primaryLight:       '#60A5FA',   // Blue 400
  primaryDark:        '#1D4ED8',   // Blue 700
  secondary:          '#7C3AED',   // Violet 600
  secondaryLight:     '#A78BFA',   // Violet 400
  secondaryDark:      '#5B21B6',   // Violet 700
  accent:             '#F59E0B',   // Amber 500
  accentLight:        '#FCD34D',   // Amber 300
  accentDark:         '#D97706',   // Amber 600

  // ─── Semantic Colors ─────────────────────────────────────────────
  danger:             '#EF4444',
  dangerLight:        '#FCA5A5',
  dangerDark:         '#B91C1C',
  success:            '#22C55E',
  successLight:       '#86EFAC',
  successDark:        '#15803D',
  warning:            '#F59E0B',
  warningLight:       '#FDE68A',
  warningDark:        '#B45309',
  info:               '#3B82F6',
  infoLight:          '#93C5FD',
  infoDark:           '#1D4ED8',

  // ─── Neutral Colors ──────────────────────────────────────────────
  background:         '#FFFFFF',
  backgroundDark:     '#0F172A',
  surface:            '#F8FAFC',
  surfaceDark:        '#1E293B',
  overlay:            'rgba(0,0,0,0.5)',
  overlayLight:       'rgba(0,0,0,0.2)',
  overlayDark:        'rgba(0,0,0,0.8)',

  // ─── Text Colors ─────────────────────────────────────────────────
  text:               '#0F172A',
  textMuted:          '#64748B',
  textDisabled:       '#CBD5E1',
  textInverse:        '#FFFFFF',
  textDanger:         '#EF4444',
  textSuccess:        '#22C55E',
  textWarning:        '#D97706',
  textInfo:           '#2563EB',

  // ─── Border ──────────────────────────────────────────────────────
  borderColor:        '#E2E8F0',
  borderColorDark:    '#334155',
  borderWidth:        1,
  borderWidthMd:      2,
  borderWidthLg:      4,

  // ─── Border Radius ───────────────────────────────────────────────
  borderRadiusBase:   8,      // Used as multiplier
  radiusNone:         0,
  radiusSm:           4,
  radiusMd:           8,
  radiusLg:           12,
  radiusXl:           16,
  radius2xl:          24,
  radius3xl:          32,
  radiusFull:         9999,

  // ─── Spacing ─────────────────────────────────────────────────────
  spacingBase:        4,      // 1 unit = 4px
  // spacing scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10,
  //                11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

  // ─── Typography ──────────────────────────────────────────────────
  fontFamily:         'System',
  fontFamilyMono:     'Courier',
  fontFamilySerif:    'Georgia',
  fontSizeXs:         10,
  fontSizeSm:         12,
  fontSizeBase:       14,
  fontSizeMd:         16,
  fontSizeLg:         18,
  fontSizeXl:         20,
  fontSize2xl:        24,
  fontSize3xl:        30,
  fontSize4xl:        36,
  fontSize5xl:        48,
  fontSize6xl:        60,
  fontSize7xl:        72,
  fontWeightThin:     '100',
  fontWeightExtraLight:'200',
  fontWeightLight:    '300',
  fontWeightNormal:   '400',
  fontWeightMedium:   '500',
  fontWeightSemibold: '600',
  fontWeightBold:     '700',
  fontWeightExtrabold:'800',
  fontWeightBlack:    '900',
  lineHeightTight:    1.25,
  lineHeightSnug:     1.375,
  lineHeightNormal:   1.5,
  lineHeightRelaxed:  1.625,
  lineHeightLoose:    2,
  letterSpacingTight: -0.5,
  letterSpacingNormal:0,
  letterSpacingWide:  0.5,
  letterSpacingWider: 1,
  letterSpacingWidest:2,

  // ─── Shadows ─────────────────────────────────────────────────────
  shadowColor:        '#000000',
  shadowColorPrimary: '#2563EB',
  shadowXs: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  shadowSm: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  shadowMd: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  shadowLg: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
  shadowXl: {
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.20,
    shadowRadius: 24,
    elevation: 12,
  },
  shadow2xl: {
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.25,
    shadowRadius: 48,
    elevation: 20,
  },

  // ─── Animation ───────────────────────────────────────────────────
  durationFast:       150,   // ms
  durationNormal:     250,
  durationSlow:       400,
  durationSlower:     600,
  easingDefault:      'ease-in-out',

  // ─── Z-Index ─────────────────────────────────────────────────────
  zIndexBase:         0,
  zIndexDropdown:     100,
  zIndexSticky:       200,
  zIndexFixed:        300,
  zIndexModalBackdrop:400,
  zIndexModal:        500,
  zIndexPopover:      600,
  zIndexTooltip:      700,
  zIndexToast:        800,
  zIndexTop:          999,

  // ─── Opacity ─────────────────────────────────────────────────────
  opacity0:    0,
  opacity5:    0.05,
  opacity10:   0.10,
  opacity20:   0.20,
  opacity25:   0.25,
  opacity30:   0.30,
  opacity40:   0.40,
  opacity50:   0.50,
  opacity60:   0.60,
  opacity70:   0.70,
  opacity75:   0.75,
  opacity80:   0.80,
  opacity90:   0.90,
  opacity95:   0.95,
  opacity100:  1,

  // ─── Platform Overrides ──────────────────────────────────────────
  platformIos: {},     // deep-merged on iOS
  platformAndroid: {}, // deep-merged on Android
  platformWeb: {},     // deep-merged on Web
});
```

---

## The `<Moxie>` Provider

```tsx
import { Moxie } from 'moxie-native-styles';

<Moxie
  config={moxieConfig}      // Required: your moxie.config.ts export
  darkMode={false}          // Optional: enable dark mode token swap
  theme="light"             // Optional: 'light' | 'dark' | 'system'
  debug={false}             // Optional: logs computed tokens in dev
>
  {children}
</Moxie>
```

### Accessing styles

```tsx
// Hook (recommended)
const { s, tokens, platform } = useMoxie();

// HOC
withMoxie(MyComponent);

// Static (outside components, after provider mounts)
import { moxie } from 'moxie-native-styles';
moxie.s.flex1;
```

---

## Style Reference

> All 900+ styles listed below. Values shown are defaults and can be overridden via `moxie.config.ts`.

---

### Spacing

Moxie uses a `spacingBase` of `4` (px). The scale below maps `s.{prefix}{n}` → `n * spacingBase`.

#### Margin — `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`

| Style Token    | Property                    | Value  |
|---------------|-----------------------------|--------|
| `s.m0`        | margin                      | 0      |
| `s.m0_5`      | margin                      | 2      |
| `s.m1`        | margin                      | 4      |
| `s.m1_5`      | margin                      | 6      |
| `s.m2`        | margin                      | 8      |
| `s.m2_5`      | margin                      | 10     |
| `s.m3`        | margin                      | 12     |
| `s.m3_5`      | margin                      | 14     |
| `s.m4`        | margin                      | 16     |
| `s.m5`        | margin                      | 20     |
| `s.m6`        | margin                      | 24     |
| `s.m7`        | margin                      | 28     |
| `s.m8`        | margin                      | 32     |
| `s.m9`        | margin                      | 36     |
| `s.m10`       | margin                      | 40     |
| `s.m11`       | margin                      | 44     |
| `s.m12`       | margin                      | 48     |
| `s.m14`       | margin                      | 56     |
| `s.m16`       | margin                      | 64     |
| `s.m20`       | margin                      | 80     |
| `s.m24`       | margin                      | 96     |
| `s.m28`       | margin                      | 112    |
| `s.m32`       | margin                      | 128    |
| `s.mAuto`     | margin                      | 'auto' |
| `s.mx0`       | marginHorizontal            | 0      |
| `s.mx0_5`     | marginHorizontal            | 2      |
| `s.mx1`       | marginHorizontal            | 4      |
| `s.mx1_5`     | marginHorizontal            | 6      |
| `s.mx2`       | marginHorizontal            | 8      |
| `s.mx2_5`     | marginHorizontal            | 10     |
| `s.mx3`       | marginHorizontal            | 12     |
| `s.mx3_5`     | marginHorizontal            | 14     |
| `s.mx4`       | marginHorizontal            | 16     |
| `s.mx5`       | marginHorizontal            | 20     |
| `s.mx6`       | marginHorizontal            | 24     |
| `s.mx7`       | marginHorizontal            | 28     |
| `s.mx8`       | marginHorizontal            | 32     |
| `s.mx10`      | marginHorizontal            | 40     |
| `s.mx12`      | marginHorizontal            | 48     |
| `s.mx16`      | marginHorizontal            | 64     |
| `s.mxAuto`    | marginHorizontal            | 'auto' |
| `s.my0`       | marginVertical              | 0      |
| `s.my0_5`     | marginVertical              | 2      |
| `s.my1`       | marginVertical              | 4      |
| `s.my1_5`     | marginVertical              | 6      |
| `s.my2`       | marginVertical              | 8      |
| `s.my2_5`     | marginVertical              | 10     |
| `s.my3`       | marginVertical              | 12     |
| `s.my3_5`     | marginVertical              | 14     |
| `s.my4`       | marginVertical              | 16     |
| `s.my5`       | marginVertical              | 20     |
| `s.my6`       | marginVertical              | 24     |
| `s.my8`       | marginVertical              | 32     |
| `s.my10`      | marginVertical              | 40     |
| `s.my12`      | marginVertical              | 48     |
| `s.my16`      | marginVertical              | 64     |
| `s.myAuto`    | marginVertical              | 'auto' |
| `s.mt0`       | marginTop                   | 0      |
| `s.mt0_5`     | marginTop                   | 2      |
| `s.mt1`       | marginTop                   | 4      |
| `s.mt1_5`     | marginTop                   | 6      |
| `s.mt2`       | marginTop                   | 8      |
| `s.mt2_5`     | marginTop                   | 10     |
| `s.mt3`       | marginTop                   | 12     |
| `s.mt3_5`     | marginTop                   | 14     |
| `s.mt4`       | marginTop                   | 16     |
| `s.mt5`       | marginTop                   | 20     |
| `s.mt6`       | marginTop                   | 24     |
| `s.mt7`       | marginTop                   | 28     |
| `s.mt8`       | marginTop                   | 32     |
| `s.mt10`      | marginTop                   | 40     |
| `s.mt12`      | marginTop                   | 48     |
| `s.mt16`      | marginTop                   | 64     |
| `s.mtAuto`    | marginTop                   | 'auto' |
| `s.mb0`       | marginBottom                | 0      |
| `s.mb0_5`     | marginBottom                | 2      |
| `s.mb1`       | marginBottom                | 4      |
| `s.mb1_5`     | marginBottom                | 6      |
| `s.mb2`       | marginBottom                | 8      |
| `s.mb2_5`     | marginBottom                | 10     |
| `s.mb3`       | marginBottom                | 12     |
| `s.mb3_5`     | marginBottom                | 14     |
| `s.mb4`       | marginBottom                | 16     |
| `s.mb5`       | marginBottom                | 20     |
| `s.mb6`       | marginBottom                | 24     |
| `s.mb7`       | marginBottom                | 28     |
| `s.mb8`       | marginBottom                | 32     |
| `s.mb10`      | marginBottom                | 40     |
| `s.mb12`      | marginBottom                | 48     |
| `s.mb16`      | marginBottom                | 64     |
| `s.mbAuto`    | marginBottom                | 'auto' |
| `s.ml0`       | marginLeft                  | 0      |
| `s.ml1`       | marginLeft                  | 4      |
| `s.ml2`       | marginLeft                  | 8      |
| `s.ml3`       | marginLeft                  | 12     |
| `s.ml4`       | marginLeft                  | 16     |
| `s.ml5`       | marginLeft                  | 20     |
| `s.ml6`       | marginLeft                  | 24     |
| `s.ml8`       | marginLeft                  | 32     |
| `s.mlAuto`    | marginLeft                  | 'auto' |
| `s.mr0`       | marginRight                 | 0      |
| `s.mr1`       | marginRight                 | 4      |
| `s.mr2`       | marginRight                 | 8      |
| `s.mr3`       | marginRight                 | 12     |
| `s.mr4`       | marginRight                 | 16     |
| `s.mr5`       | marginRight                 | 20     |
| `s.mr6`       | marginRight                 | 24     |
| `s.mr8`       | marginRight                 | 32     |
| `s.mrAuto`    | marginRight                 | 'auto' |

#### Padding — `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`

| Style Token    | Property                    | Value  |
|---------------|-----------------------------|--------|
| `s.p0`        | padding                     | 0      |
| `s.p0_5`      | padding                     | 2      |
| `s.p1`        | padding                     | 4      |
| `s.p1_5`      | padding                     | 6      |
| `s.p2`        | padding                     | 8      |
| `s.p2_5`      | padding                     | 10     |
| `s.p3`        | padding                     | 12     |
| `s.p3_5`      | padding                     | 14     |
| `s.p4`        | padding                     | 16     |
| `s.p5`        | padding                     | 20     |
| `s.p6`        | padding                     | 24     |
| `s.p7`        | padding                     | 28     |
| `s.p8`        | padding                     | 32     |
| `s.p9`        | padding                     | 36     |
| `s.p10`       | padding                     | 40     |
| `s.p11`       | padding                     | 44     |
| `s.p12`       | padding                     | 48     |
| `s.p14`       | padding                     | 56     |
| `s.p16`       | padding                     | 64     |
| `s.p20`       | padding                     | 80     |
| `s.p24`       | padding                     | 96     |
| `s.px0`       | paddingHorizontal           | 0      |
| `s.px0_5`     | paddingHorizontal           | 2      |
| `s.px1`       | paddingHorizontal           | 4      |
| `s.px1_5`     | paddingHorizontal           | 6      |
| `s.px2`       | paddingHorizontal           | 8      |
| `s.px2_5`     | paddingHorizontal           | 10     |
| `s.px3`       | paddingHorizontal           | 12     |
| `s.px3_5`     | paddingHorizontal           | 14     |
| `s.px4`       | paddingHorizontal           | 16     |
| `s.px5`       | paddingHorizontal           | 20     |
| `s.px6`       | paddingHorizontal           | 24     |
| `s.px7`       | paddingHorizontal           | 28     |
| `s.px8`       | paddingHorizontal           | 32     |
| `s.px10`      | paddingHorizontal           | 40     |
| `s.px12`      | paddingHorizontal           | 48     |
| `s.px16`      | paddingHorizontal           | 64     |
| `s.py0`       | paddingVertical             | 0      |
| `s.py0_5`     | paddingVertical             | 2      |
| `s.py1`       | paddingVertical             | 4      |
| `s.py1_5`     | paddingVertical             | 6      |
| `s.py2`       | paddingVertical             | 8      |
| `s.py2_5`     | paddingVertical             | 10     |
| `s.py3`       | paddingVertical             | 12     |
| `s.py3_5`     | paddingVertical             | 14     |
| `s.py4`       | paddingVertical             | 16     |
| `s.py5`       | paddingVertical             | 20     |
| `s.py6`       | paddingVertical             | 24     |
| `s.py7`       | paddingVertical             | 28     |
| `s.py8`       | paddingVertical             | 32     |
| `s.py10`      | paddingVertical             | 40     |
| `s.py12`      | paddingVertical             | 48     |
| `s.py16`      | paddingVertical             | 64     |
| `s.pt0`       | paddingTop                  | 0      |
| `s.pt1`       | paddingTop                  | 4      |
| `s.pt2`       | paddingTop                  | 8      |
| `s.pt3`       | paddingTop                  | 12     |
| `s.pt4`       | paddingTop                  | 16     |
| `s.pt5`       | paddingTop                  | 20     |
| `s.pt6`       | paddingTop                  | 24     |
| `s.pt8`       | paddingTop                  | 32     |
| `s.pt10`      | paddingTop                  | 40     |
| `s.pt12`      | paddingTop                  | 48     |
| `s.pt16`      | paddingTop                  | 64     |
| `s.pb0`       | paddingBottom               | 0      |
| `s.pb1`       | paddingBottom               | 4      |
| `s.pb2`       | paddingBottom               | 8      |
| `s.pb3`       | paddingBottom               | 12     |
| `s.pb4`       | paddingBottom               | 16     |
| `s.pb5`       | paddingBottom               | 20     |
| `s.pb6`       | paddingBottom               | 24     |
| `s.pb8`       | paddingBottom               | 32     |
| `s.pb10`      | paddingBottom               | 40     |
| `s.pb12`      | paddingBottom               | 48     |
| `s.pb16`      | paddingBottom               | 64     |
| `s.pl0`       | paddingLeft                 | 0      |
| `s.pl1`       | paddingLeft                 | 4      |
| `s.pl2`       | paddingLeft                 | 8      |
| `s.pl3`       | paddingLeft                 | 12     |
| `s.pl4`       | paddingLeft                 | 16     |
| `s.pl5`       | paddingLeft                 | 20     |
| `s.pl6`       | paddingLeft                 | 24     |
| `s.pl8`       | paddingLeft                 | 32     |
| `s.pr0`       | paddingRight                | 0      |
| `s.pr1`       | paddingRight                | 4      |
| `s.pr2`       | paddingRight                | 8      |
| `s.pr3`       | paddingRight                | 12     |
| `s.pr4`       | paddingRight                | 16     |
| `s.pr5`       | paddingRight                | 20     |
| `s.pr6`       | paddingRight                | 24     |
| `s.pr8`       | paddingRight                | 32     |

---

### Typography

#### Font Size

| Style Token    | Property    | Value |
|---------------|-------------|-------|
| `s.textXs`    | fontSize    | 10    |
| `s.textSm`    | fontSize    | 12    |
| `s.textBase`  | fontSize    | 14    |
| `s.textMd`    | fontSize    | 16    |
| `s.textLg`    | fontSize    | 18    |
| `s.textXl`    | fontSize    | 20    |
| `s.text2xl`   | fontSize    | 24    |
| `s.text3xl`   | fontSize    | 30    |
| `s.text4xl`   | fontSize    | 36    |
| `s.text5xl`   | fontSize    | 48    |
| `s.text6xl`   | fontSize    | 60    |
| `s.text7xl`   | fontSize    | 72    |
| `s.text8xl`   | fontSize    | 96    |

#### Font Family

| Style Token       | Property    | Value               |
|------------------|-------------|---------------------|
| `s.fontSans`     | fontFamily  | tokens.fontFamily   |
| `s.fontMono`     | fontFamily  | tokens.fontFamilyMono |
| `s.fontSerif`    | fontFamily  | tokens.fontFamilySerif |

---

### Font Weight

| Style Token       | Property    | Value |
|------------------|-------------|-------|
| `s.fontThin`     | fontWeight  | '100' |
| `s.fontExtralight`| fontWeight | '200' |
| `s.fontLight`    | fontWeight  | '300' |
| `s.fontNormal`   | fontWeight  | '400' |
| `s.fontMedium`   | fontWeight  | '500' |
| `s.fontSemibold` | fontWeight  | '600' |
| `s.fontBold`     | fontWeight  | '700' |
| `s.fontExtrabold`| fontWeight  | '800' |
| `s.fontBlack`    | fontWeight  | '900' |

---

### Font Style

| Style Token    | Property    | Value    |
|---------------|-------------|----------|
| `s.italic`    | fontStyle   | 'italic' |
| `s.notItalic` | fontStyle   | 'normal' |

---

### Letter Spacing

| Style Token         | Property       | Value |
|--------------------|----------------|-------|
| `s.trackingTighter` | letterSpacing  | -1    |
| `s.trackingTight`   | letterSpacing  | -0.5  |
| `s.trackingNormal`  | letterSpacing  | 0     |
| `s.trackingWide`    | letterSpacing  | 0.5   |
| `s.trackingWider`   | letterSpacing  | 1     |
| `s.trackingWidest`  | letterSpacing  | 2     |

---

### Line Height

| Style Token        | Property   | Value |
|-------------------|------------|-------|
| `s.leadingNone`   | lineHeight | 14    |
| `s.leadingTight`  | lineHeight | 18    |
| `s.leadingSnug`   | lineHeight | 20    |
| `s.leadingNormal` | lineHeight | 22    |
| `s.leadingRelaxed`| lineHeight | 26    |
| `s.leadingLoose`  | lineHeight | 32    |

---

### Text Align

| Style Token       | Property  | Value    |
|------------------|-----------|----------|
| `s.textLeft`     | textAlign | 'left'   |
| `s.textCenter`   | textAlign | 'center' |
| `s.textRight`    | textAlign | 'right'  |
| `s.textJustify`  | textAlign | 'justify'|
| `s.textAuto`     | textAlign | 'auto'   |

---

### Text Decoration

| Style Token           | Property              | Value         |
|----------------------|-----------------------|---------------|
| `s.underline`        | textDecorationLine    | 'underline'   |
| `s.lineThrough`      | textDecorationLine    | 'line-through'|
| `s.underlineThrough` | textDecorationLine    | 'underline line-through' |
| `s.noUnderline`      | textDecorationLine    | 'none'        |

---

### Text Transform

| Style Token     | Property       | Value       |
|----------------|----------------|-------------|
| `s.uppercase`  | textTransform  | 'uppercase' |
| `s.lowercase`  | textTransform  | 'lowercase' |
| `s.capitalize` | textTransform  | 'capitalize'|
| `s.normalCase` | textTransform  | 'none'      |

---

### Colors & Backgrounds

#### Text Colors

| Style Token        | Property | Value                 |
|-------------------|----------|-----------------------|
| `s.textPrimary`   | color    | tokens.primary        |
| `s.textSecondary` | color    | tokens.secondary      |
| `s.textAccent`    | color    | tokens.accent         |
| `s.textDefault`   | color    | tokens.text           |
| `s.textMuted`     | color    | tokens.textMuted      |
| `s.textDisabled`  | color    | tokens.textDisabled   |
| `s.textWhite`     | color    | '#FFFFFF'             |
| `s.textBlack`     | color    | '#000000'             |
| `s.textInverse`   | color    | tokens.textInverse    |
| `s.textDanger`    | color    | tokens.danger         |
| `s.textSuccess`   | color    | tokens.success        |
| `s.textWarning`   | color    | tokens.warning        |
| `s.textInfo`      | color    | tokens.info           |
| `s.textGray50`    | color    | '#F9FAFB'             |
| `s.textGray100`   | color    | '#F3F4F6'             |
| `s.textGray200`   | color    | '#E5E7EB'             |
| `s.textGray300`   | color    | '#D1D5DB'             |
| `s.textGray400`   | color    | '#9CA3AF'             |
| `s.textGray500`   | color    | '#6B7280'             |
| `s.textGray600`   | color    | '#4B5563'             |
| `s.textGray700`   | color    | '#374151'             |
| `s.textGray800`   | color    | '#1F2937'             |
| `s.textGray900`   | color    | '#111827'             |
| `s.textSlate50`   | color    | '#F8FAFC'             |
| `s.textSlate100`  | color    | '#F1F5F9'             |
| `s.textSlate200`  | color    | '#E2E8F0'             |
| `s.textSlate300`  | color    | '#CBD5E1'             |
| `s.textSlate400`  | color    | '#94A3B8'             |
| `s.textSlate500`  | color    | '#64748B'             |
| `s.textSlate600`  | color    | '#475569'             |
| `s.textSlate700`  | color    | '#334155'             |
| `s.textSlate800`  | color    | '#1E293B'             |
| `s.textSlate900`  | color    | '#0F172A'             |
| `s.textBlue400`   | color    | '#60A5FA'             |
| `s.textBlue500`   | color    | '#3B82F6'             |
| `s.textBlue600`   | color    | '#2563EB'             |
| `s.textBlue700`   | color    | '#1D4ED8'             |
| `s.textRed400`    | color    | '#F87171'             |
| `s.textRed500`    | color    | '#EF4444'             |
| `s.textRed600`    | color    | '#DC2626'             |
| `s.textGreen400`  | color    | '#4ADE80'             |
| `s.textGreen500`  | color    | '#22C55E'             |
| `s.textGreen600`  | color    | '#16A34A'             |
| `s.textYellow400` | color    | '#FACC15'             |
| `s.textYellow500` | color    | '#EAB308'             |
| `s.textAmber400`  | color    | '#FBBF24'             |
| `s.textAmber500`  | color    | '#F59E0B'             |
| `s.textViolet400` | color    | '#A78BFA'             |
| `s.textViolet500` | color    | '#8B5CF6'             |
| `s.textViolet600` | color    | '#7C3AED'             |
| `s.textPink400`   | color    | '#F472B6'             |
| `s.textPink500`   | color    | '#EC4899'             |
| `s.textOrange400` | color    | '#FB923C'             |
| `s.textOrange500` | color    | '#F97316'             |
| `s.textTeal400`   | color    | '#2DD4BF'             |
| `s.textTeal500`   | color    | '#14B8A6'             |
| `s.textCyan400`   | color    | '#22D3EE'             |
| `s.textCyan500`   | color    | '#06B6D4'             |

#### Background Colors

| Style Token        | Property        | Value                 |
|-------------------|-----------------|----------------------|
| `s.bgPrimary`     | backgroundColor | tokens.primary        |
| `s.bgPrimaryLight`| backgroundColor | tokens.primaryLight   |
| `s.bgPrimaryDark` | backgroundColor | tokens.primaryDark    |
| `s.bgSecondary`   | backgroundColor | tokens.secondary      |
| `s.bgAccent`      | backgroundColor | tokens.accent         |
| `s.bgBackground`  | backgroundColor | tokens.background     |
| `s.bgSurface`     | backgroundColor | tokens.surface        |
| `s.bgDanger`      | backgroundColor | tokens.danger         |
| `s.bgSuccess`     | backgroundColor | tokens.success        |
| `s.bgWarning`     | backgroundColor | tokens.warning        |
| `s.bgInfo`        | backgroundColor | tokens.info           |
| `s.bgWhite`       | backgroundColor | '#FFFFFF'             |
| `s.bgBlack`       | backgroundColor | '#000000'             |
| `s.bgTransparent` | backgroundColor | 'transparent'         |
| `s.bgOverlay`     | backgroundColor | tokens.overlay        |
| `s.bgGray50`      | backgroundColor | '#F9FAFB'             |
| `s.bgGray100`     | backgroundColor | '#F3F4F6'             |
| `s.bgGray200`     | backgroundColor | '#E5E7EB'             |
| `s.bgGray300`     | backgroundColor | '#D1D5DB'             |
| `s.bgGray400`     | backgroundColor | '#9CA3AF'             |
| `s.bgGray500`     | backgroundColor | '#6B7280'             |
| `s.bgGray600`     | backgroundColor | '#4B5563'             |
| `s.bgGray700`     | backgroundColor | '#374151'             |
| `s.bgGray800`     | backgroundColor | '#1F2937'             |
| `s.bgGray900`     | backgroundColor | '#111827'             |
| `s.bgSlate50`     | backgroundColor | '#F8FAFC'             |
| `s.bgSlate100`    | backgroundColor | '#F1F5F9'             |
| `s.bgSlate200`    | backgroundColor | '#E2E8F0'             |
| `s.bgSlate300`    | backgroundColor | '#CBD5E1'             |
| `s.bgSlate400`    | backgroundColor | '#94A3B8'             |
| `s.bgSlate500`    | backgroundColor | '#64748B'             |
| `s.bgSlate600`    | backgroundColor | '#475569'             |
| `s.bgSlate700`    | backgroundColor | '#334155'             |
| `s.bgSlate800`    | backgroundColor | '#1E293B'             |
| `s.bgSlate900`    | backgroundColor | '#0F172A'             |
| `s.bgBlue50`      | backgroundColor | '#EFF6FF'             |
| `s.bgBlue100`     | backgroundColor | '#DBEAFE'             |
| `s.bgBlue200`     | backgroundColor | '#BFDBFE'             |
| `s.bgBlue300`     | backgroundColor | '#93C5FD'             |
| `s.bgBlue400`     | backgroundColor | '#60A5FA'             |
| `s.bgBlue500`     | backgroundColor | '#3B82F6'             |
| `s.bgBlue600`     | backgroundColor | '#2563EB'             |
| `s.bgBlue700`     | backgroundColor | '#1D4ED8'             |
| `s.bgBlue800`     | backgroundColor | '#1E40AF'             |
| `s.bgBlue900`     | backgroundColor | '#1E3A8A'             |
| `s.bgRed50`       | backgroundColor | '#FEF2F2'             |
| `s.bgRed100`      | backgroundColor | '#FEE2E2'             |
| `s.bgRed200`      | backgroundColor | '#FECACA'             |
| `s.bgRed400`      | backgroundColor | '#F87171'             |
| `s.bgRed500`      | backgroundColor | '#EF4444'             |
| `s.bgRed600`      | backgroundColor | '#DC2626'             |
| `s.bgGreen50`     | backgroundColor | '#F0FDF4'             |
| `s.bgGreen100`    | backgroundColor | '#DCFCE7'             |
| `s.bgGreen200`    | backgroundColor | '#BBF7D0'             |
| `s.bgGreen400`    | backgroundColor | '#4ADE80'             |
| `s.bgGreen500`    | backgroundColor | '#22C55E'             |
| `s.bgGreen600`    | backgroundColor | '#16A34A'             |
| `s.bgYellow50`    | backgroundColor | '#FEFCE8'             |
| `s.bgYellow100`   | backgroundColor | '#FEF9C3'             |
| `s.bgYellow400`   | backgroundColor | '#FACC15'             |
| `s.bgYellow500`   | backgroundColor | '#EAB308'             |
| `s.bgAmber50`     | backgroundColor | '#FFFBEB'             |
| `s.bgAmber100`    | backgroundColor | '#FEF3C7'             |
| `s.bgAmber400`    | backgroundColor | '#FBBF24'             |
| `s.bgAmber500`    | backgroundColor | '#F59E0B'             |
| `s.bgViolet50`    | backgroundColor | '#F5F3FF'             |
| `s.bgViolet100`   | backgroundColor | '#EDE9FE'             |
| `s.bgViolet400`   | backgroundColor | '#A78BFA'             |
| `s.bgViolet500`   | backgroundColor | '#8B5CF6'             |
| `s.bgViolet600`   | backgroundColor | '#7C3AED'             |
| `s.bgPink50`      | backgroundColor | '#FDF2F8'             |
| `s.bgPink100`     | backgroundColor | '#FCE7F3'             |
| `s.bgPink400`     | backgroundColor | '#F472B6'             |
| `s.bgPink500`     | backgroundColor | '#EC4899'             |
| `s.bgOrange50`    | backgroundColor | '#FFF7ED'             |
| `s.bgOrange100`   | backgroundColor | '#FFEDD5'             |
| `s.bgOrange400`   | backgroundColor | '#FB923C'             |
| `s.bgOrange500`   | backgroundColor | '#F97316'             |
| `s.bgTeal50`      | backgroundColor | '#F0FDFA'             |
| `s.bgTeal100`     | backgroundColor | '#CCFBF1'             |
| `s.bgTeal400`     | backgroundColor | '#2DD4BF'             |
| `s.bgTeal500`     | backgroundColor | '#14B8A6'             |
| `s.bgCyan50`      | backgroundColor | '#ECFEFF'             |
| `s.bgCyan100`     | backgroundColor | '#CFFAFE'             |
| `s.bgCyan400`     | backgroundColor | '#22D3EE'             |
| `s.bgCyan500`     | backgroundColor | '#06B6D4'             |
| `s.bgIndigo50`    | backgroundColor | '#EEF2FF'             |
| `s.bgIndigo100`   | backgroundColor | '#E0E7FF'             |
| `s.bgIndigo400`   | backgroundColor | '#818CF8'             |
| `s.bgIndigo500`   | backgroundColor | '#6366F1'             |
| `s.bgIndigo600`   | backgroundColor | '#4F46E5'             |

---

### Borders

#### Border Width

| Style Token       | Property    | Value |
|------------------|-------------|-------|
| `s.border0`      | borderWidth | 0     |
| `s.border`       | borderWidth | 1     |
| `s.border2`      | borderWidth | 2     |
| `s.border4`      | borderWidth | 4     |
| `s.border8`      | borderWidth | 8     |
| `s.borderT`      | borderTopWidth | 1  |
| `s.borderT0`     | borderTopWidth | 0  |
| `s.borderT2`     | borderTopWidth | 2  |
| `s.borderT4`     | borderTopWidth | 4  |
| `s.borderB`      | borderBottomWidth | 1  |
| `s.borderB0`     | borderBottomWidth | 0  |
| `s.borderB2`     | borderBottomWidth | 2  |
| `s.borderB4`     | borderBottomWidth | 4  |
| `s.borderL`      | borderLeftWidth | 1   |
| `s.borderL0`     | borderLeftWidth | 0   |
| `s.borderL2`     | borderLeftWidth | 2   |
| `s.borderL4`     | borderLeftWidth | 4   |
| `s.borderR`      | borderRightWidth | 1  |
| `s.borderR0`     | borderRightWidth | 0  |
| `s.borderR2`     | borderRightWidth | 2  |
| `s.borderR4`     | borderRightWidth | 4  |

#### Border Color

| Style Token           | Property    | Value              |
|----------------------|-------------|-------------------|
| `s.borderDefault`    | borderColor | tokens.borderColor |
| `s.borderPrimary`    | borderColor | tokens.primary     |
| `s.borderSecondary`  | borderColor | tokens.secondary   |
| `s.borderAccent`     | borderColor | tokens.accent      |
| `s.borderDanger`     | borderColor | tokens.danger      |
| `s.borderSuccess`    | borderColor | tokens.success     |
| `s.borderWarning`    | borderColor | tokens.warning     |
| `s.borderInfo`       | borderColor | tokens.info        |
| `s.borderWhite`      | borderColor | '#FFFFFF'          |
| `s.borderBlack`      | borderColor | '#000000'          |
| `s.borderTransparent`| borderColor | 'transparent'      |
| `s.borderGray100`    | borderColor | '#F3F4F6'          |
| `s.borderGray200`    | borderColor | '#E5E7EB'          |
| `s.borderGray300`    | borderColor | '#D1D5DB'          |
| `s.borderGray400`    | borderColor | '#9CA3AF'          |
| `s.borderGray500`    | borderColor | '#6B7280'          |
| `s.borderSlate200`   | borderColor | '#E2E8F0'          |
| `s.borderSlate300`   | borderColor | '#CBD5E1'          |
| `s.borderSlate400`   | borderColor | '#94A3B8'          |
| `s.borderBlue400`    | borderColor | '#60A5FA'          |
| `s.borderBlue500`    | borderColor | '#3B82F6'          |
| `s.borderBlue600`    | borderColor | '#2563EB'          |
| `s.borderRed400`     | borderColor | '#F87171'          |
| `s.borderRed500`     | borderColor | '#EF4444'          |
| `s.borderGreen400`   | borderColor | '#4ADE80'          |
| `s.borderGreen500`   | borderColor | '#22C55E'          |
| `s.borderYellow400`  | borderColor | '#FACC15'          |
| `s.borderAmber500`   | borderColor | '#F59E0B'          |
| `s.borderViolet500`  | borderColor | '#8B5CF6'          |

#### Border Style

| Style Token       | Property    | Value    |
|------------------|-------------|----------|
| `s.borderSolid`  | borderStyle | 'solid'  |
| `s.borderDashed` | borderStyle | 'dashed' |
| `s.borderDotted` | borderStyle | 'dotted' |

---

### Border Radius

| Style Token      | Property     | Value |
|-----------------|--------------|-------|
| `s.roundedNone` | borderRadius | 0     |
| `s.roundedSm`   | borderRadius | 4     |
| `s.rounded`     | borderRadius | 8     |
| `s.roundedMd`   | borderRadius | 8     |
| `s.roundedLg`   | borderRadius | 12    |
| `s.roundedXl`   | borderRadius | 16    |
| `s.rounded2xl`  | borderRadius | 24    |
| `s.rounded3xl`  | borderRadius | 32    |
| `s.roundedFull` | borderRadius | 9999  |
| `s.roundedT`    | borderTopLeftRadius + borderTopRightRadius | 8 |
| `s.roundedTSm`  | borderTopLeftRadius + borderTopRightRadius | 4 |
| `s.roundedTLg`  | borderTopLeftRadius + borderTopRightRadius | 12 |
| `s.roundedTXl`  | borderTopLeftRadius + borderTopRightRadius | 16 |
| `s.roundedT2xl` | borderTopLeftRadius + borderTopRightRadius | 24 |
| `s.roundedTFull`| borderTopLeftRadius + borderTopRightRadius | 9999 |
| `s.roundedB`    | borderBottomLeftRadius + borderBottomRightRadius | 8 |
| `s.roundedBSm`  | borderBottomLeftRadius + borderBottomRightRadius | 4 |
| `s.roundedBLg`  | borderBottomLeftRadius + borderBottomRightRadius | 12 |
| `s.roundedBXl`  | borderBottomLeftRadius + borderBottomRightRadius | 16 |
| `s.roundedB2xl` | borderBottomLeftRadius + borderBottomRightRadius | 24 |
| `s.roundedBFull`| borderBottomLeftRadius + borderBottomRightRadius | 9999 |
| `s.roundedL`    | borderTopLeftRadius + borderBottomLeftRadius | 8 |
| `s.roundedLSm`  | borderTopLeftRadius + borderBottomLeftRadius | 4 |
| `s.roundedLLg`  | borderTopLeftRadius + borderBottomLeftRadius | 12 |
| `s.roundedLXl`  | borderTopLeftRadius + borderBottomLeftRadius | 16 |
| `s.roundedR`    | borderTopRightRadius + borderBottomRightRadius | 8 |
| `s.roundedRSm`  | borderTopRightRadius + borderBottomRightRadius | 4 |
| `s.roundedRLg`  | borderTopRightRadius + borderBottomRightRadius | 12 |
| `s.roundedRXl`  | borderTopRightRadius + borderBottomRightRadius | 16 |
| `s.roundedTl`   | borderTopLeftRadius | 8 |
| `s.roundedTr`   | borderTopRightRadius | 8 |
| `s.roundedBl`   | borderBottomLeftRadius | 8 |
| `s.roundedBr`   | borderBottomRightRadius | 8 |
| `s.roundedTlFull` | borderTopLeftRadius | 9999 |
| `s.roundedTrFull` | borderTopRightRadius | 9999 |
| `s.roundedBlFull` | borderBottomLeftRadius | 9999 |
| `s.roundedBrFull` | borderBottomRightRadius | 9999 |

---

### Shadows & Elevation

| Style Token    | Properties                                                    |
|---------------|---------------------------------------------------------------|
| `s.shadowNone`| shadowOpacity: 0, elevation: 0                                |
| `s.shadowXs`  | shadowOffset {0,1}, shadowOpacity 0.05, shadowRadius 2, elevation 1 |
| `s.shadowSm`  | shadowOffset {0,2}, shadowOpacity 0.08, shadowRadius 4, elevation 2 |
| `s.shadowMd`  | shadowOffset {0,4}, shadowOpacity 0.12, shadowRadius 8, elevation 4 |
| `s.shadowLg`  | shadowOffset {0,8}, shadowOpacity 0.16, shadowRadius 16, elevation 8 |
| `s.shadowXl`  | shadowOffset {0,16}, shadowOpacity 0.20, shadowRadius 24, elevation 12 |
| `s.shadow2xl` | shadowOffset {0,24}, shadowOpacity 0.25, shadowRadius 48, elevation 20 |
| `s.shadowInner`| shadowOffset {0,2}, shadowOpacity 0.06, shadowRadius 4, elevation 0 (inset effect) |
| `s.shadowPrimary` | shadowColor: tokens.primary + shadowMd spread            |
| `s.shadowDanger`  | shadowColor: tokens.danger + shadowMd spread             |
| `s.elevation0`| elevation: 0  |
| `s.elevation1`| elevation: 1  |
| `s.elevation2`| elevation: 2  |
| `s.elevation3`| elevation: 3  |
| `s.elevation4`| elevation: 4  |
| `s.elevation5`| elevation: 5  |
| `s.elevation6`| elevation: 6  |
| `s.elevation8`| elevation: 8  |
| `s.elevation10`| elevation: 10 |
| `s.elevation12`| elevation: 12 |
| `s.elevation16`| elevation: 16 |
| `s.elevation20`| elevation: 20 |
| `s.elevation24`| elevation: 24 |

---

### Flex & Layout

| Style Token              | Property               | Value              |
|-------------------------|------------------------|--------------------|
| `s.flex1`               | flex                   | 1                  |
| `s.flex2`               | flex                   | 2                  |
| `s.flex3`               | flex                   | 3                  |
| `s.flexAuto`            | flex                   | -1 / auto          |
| `s.flexNone`            | flex                   | 0                  |
| `s.flexShrink`          | flexShrink             | 1                  |
| `s.flexShrink0`         | flexShrink             | 0                  |
| `s.flexGrow`            | flexGrow               | 1                  |
| `s.flexGrow0`           | flexGrow               | 0                  |
| `s.flexRow`             | flexDirection          | 'row'              |
| `s.flexCol`             | flexDirection          | 'column'           |
| `s.flexRowReverse`      | flexDirection          | 'row-reverse'      |
| `s.flexColReverse`      | flexDirection          | 'column-reverse'   |
| `s.flexWrap`            | flexWrap               | 'wrap'             |
| `s.flexNoWrap`          | flexWrap               | 'nowrap'           |
| `s.flexWrapReverse`     | flexWrap               | 'wrap-reverse'     |
| `s.itemsStart`          | alignItems             | 'flex-start'       |
| `s.itemsEnd`            | alignItems             | 'flex-end'         |
| `s.itemsCenter`         | alignItems             | 'center'           |
| `s.itemsStretch`        | alignItems             | 'stretch'          |
| `s.itemsBaseline`       | alignItems             | 'baseline'         |
| `s.justifyStart`        | justifyContent         | 'flex-start'       |
| `s.justifyEnd`          | justifyContent         | 'flex-end'         |
| `s.justifyCenter`       | justifyContent         | 'center'           |
| `s.justifyBetween`      | justifyContent         | 'space-between'    |
| `s.justifyAround`       | justifyContent         | 'space-around'     |
| `s.justifyEvenly`       | justifyContent         | 'space-evenly'     |
| `s.selfAuto`            | alignSelf              | 'auto'             |
| `s.selfStart`           | alignSelf              | 'flex-start'       |
| `s.selfEnd`             | alignSelf              | 'flex-end'         |
| `s.selfCenter`          | alignSelf              | 'center'           |
| `s.selfStretch`         | alignSelf              | 'stretch'          |
| `s.selfBaseline`        | alignSelf              | 'baseline'         |
| `s.contentStart`        | alignContent           | 'flex-start'       |
| `s.contentEnd`          | alignContent           | 'flex-end'         |
| `s.contentCenter`       | alignContent           | 'center'           |
| `s.contentBetween`      | alignContent           | 'space-between'    |
| `s.contentAround`       | alignContent           | 'space-around'     |
| `s.contentStretch`      | alignContent           | 'stretch'          |

#### Shorthand Combos

| Style Token       | Equivalent                          |
|------------------|-------------------------------------|
| `s.row`          | flexDirection:'row'                 |
| `s.col`          | flexDirection:'column'              |
| `s.center`       | justifyContent:'center', alignItems:'center' |
| `s.rowCenter`    | flexDirection:'row', justifyContent:'center', alignItems:'center' |
| `s.colCenter`    | flexDirection:'column', justifyContent:'center', alignItems:'center' |
| `s.between`      | justifyContent:'space-between'      |
| `s.rowBetween`   | flexDirection:'row', justifyContent:'space-between', alignItems:'center' |
| `s.absolute`     | position:'absolute'                 |
| `s.relative`     | position:'relative'                 |
| `s.inset0`       | top:0, right:0, bottom:0, left:0   |
| `s.fill`         | flex:1, width:'100%', height:'100%'|

---

### Sizing

#### Width

| Style Token    | Property | Value   |
|---------------|----------|---------|
| `s.w0`        | width    | 0       |
| `s.w1`        | width    | 4       |
| `s.w2`        | width    | 8       |
| `s.w3`        | width    | 12      |
| `s.w4`        | width    | 16      |
| `s.w5`        | width    | 20      |
| `s.w6`        | width    | 24      |
| `s.w7`        | width    | 28      |
| `s.w8`        | width    | 32      |
| `s.w9`        | width    | 36      |
| `s.w10`       | width    | 40      |
| `s.w11`       | width    | 44      |
| `s.w12`       | width    | 48      |
| `s.w14`       | width    | 56      |
| `s.w16`       | width    | 64      |
| `s.w20`       | width    | 80      |
| `s.w24`       | width    | 96      |
| `s.w28`       | width    | 112     |
| `s.w32`       | width    | 128     |
| `s.w36`       | width    | 144     |
| `s.w40`       | width    | 160     |
| `s.w44`       | width    | 176     |
| `s.w48`       | width    | 192     |
| `s.w52`       | width    | 208     |
| `s.w56`       | width    | 224     |
| `s.w60`       | width    | 240     |
| `s.w64`       | width    | 256     |
| `s.w72`       | width    | 288     |
| `s.w80`       | width    | 320     |
| `s.w96`       | width    | 384     |
| `s.wFull`     | width    | '100%'  |
| `s.wHalf`     | width    | '50%'   |
| `s.w1_3`      | width    | '33.33%'|
| `s.w2_3`      | width    | '66.66%'|
| `s.w1_4`      | width    | '25%'   |
| `s.w3_4`      | width    | '75%'   |
| `s.w1_5`      | width    | '20%'   |
| `s.w2_5`      | width    | '40%'   |
| `s.w3_5`      | width    | '60%'   |
| `s.w4_5`      | width    | '80%'   |
| `s.wScreen`   | width    | Dimensions.get('window').width |
| `s.wAuto`     | width    | 'auto'  |
| `s.minW0`     | minWidth | 0       |
| `s.minWFull`  | minWidth | '100%'  |
| `s.maxWXs`    | maxWidth | 320     |
| `s.maxWSm`    | maxWidth | 384     |
| `s.maxWMd`    | maxWidth | 448     |
| `s.maxWLg`    | maxWidth | 512     |
| `s.maxWXl`    | maxWidth | 576     |
| `s.maxW2xl`   | maxWidth | 672     |
| `s.maxW3xl`   | maxWidth | 768     |
| `s.maxWFull`  | maxWidth | '100%'  |

#### Height

| Style Token    | Property | Value   |
|---------------|----------|---------|
| `s.h0`        | height   | 0       |
| `s.h1`        | height   | 4       |
| `s.h2`        | height   | 8       |
| `s.h3`        | height   | 12      |
| `s.h4`        | height   | 16      |
| `s.h5`        | height   | 20      |
| `s.h6`        | height   | 24      |
| `s.h7`        | height   | 28      |
| `s.h8`        | height   | 32      |
| `s.h9`        | height   | 36      |
| `s.h10`       | height   | 40      |
| `s.h11`       | height   | 44      |
| `s.h12`       | height   | 48      |
| `s.h14`       | height   | 56      |
| `s.h16`       | height   | 64      |
| `s.h20`       | height   | 80      |
| `s.h24`       | height   | 96      |
| `s.h28`       | height   | 112     |
| `s.h32`       | height   | 128     |
| `s.h36`       | height   | 144     |
| `s.h40`       | height   | 160     |
| `s.h44`       | height   | 176     |
| `s.h48`       | height   | 192     |
| `s.h52`       | height   | 208     |
| `s.h56`       | height   | 224     |
| `s.h60`       | height   | 240     |
| `s.h64`       | height   | 256     |
| `s.h72`       | height   | 288     |
| `s.h80`       | height   | 320     |
| `s.h96`       | height   | 384     |
| `s.hFull`     | height   | '100%'  |
| `s.hHalf`     | height   | '50%'   |
| `s.hScreen`   | height   | Dimensions.get('window').height |
| `s.hAuto`     | height   | 'auto'  |
| `s.minH0`     | minHeight | 0      |
| `s.minHFull`  | minHeight | '100%' |
| `s.minHScreen`| minHeight | Dimensions.get('window').height |
| `s.maxHFull`  | maxHeight | '100%' |
| `s.maxHScreen`| maxHeight | Dimensions.get('window').height |

---

### Opacity

| Style Token  | Property | Value |
|-------------|----------|-------|
| `s.opacity0`  | opacity | 0     |
| `s.opacity5`  | opacity | 0.05  |
| `s.opacity10` | opacity | 0.10  |
| `s.opacity20` | opacity | 0.20  |
| `s.opacity25` | opacity | 0.25  |
| `s.opacity30` | opacity | 0.30  |
| `s.opacity40` | opacity | 0.40  |
| `s.opacity50` | opacity | 0.50  |
| `s.opacity60` | opacity | 0.60  |
| `s.opacity70` | opacity | 0.70  |
| `s.opacity75` | opacity | 0.75  |
| `s.opacity80` | opacity | 0.80  |
| `s.opacity90` | opacity | 0.90  |
| `s.opacity95` | opacity | 0.95  |
| `s.opacity100`| opacity | 1     |

---

### Position

| Style Token     | Property | Value      |
|----------------|----------|------------|
| `s.absolute`   | position | 'absolute' |
| `s.relative`   | position | 'relative' |
| `s.top0`       | top      | 0          |
| `s.top1`       | top      | 4          |
| `s.top2`       | top      | 8          |
| `s.top3`       | top      | 12         |
| `s.top4`       | top      | 16         |
| `s.top5`       | top      | 20         |
| `s.top6`       | top      | 24         |
| `s.top8`       | top      | 32         |
| `s.top10`      | top      | 40         |
| `s.top12`      | top      | 48         |
| `s.top16`      | top      | 64         |
| `s.topFull`    | top      | '100%'     |
| `s.bottom0`    | bottom   | 0          |
| `s.bottom1`    | bottom   | 4          |
| `s.bottom2`    | bottom   | 8          |
| `s.bottom3`    | bottom   | 12         |
| `s.bottom4`    | bottom   | 16         |
| `s.bottom5`    | bottom   | 20         |
| `s.bottom6`    | bottom   | 24         |
| `s.bottom8`    | bottom   | 32         |
| `s.bottom10`   | bottom   | 40         |
| `s.bottom12`   | bottom   | 48         |
| `s.bottom16`   | bottom   | 64         |
| `s.bottomFull` | bottom   | '100%'     |
| `s.left0`      | left     | 0          |
| `s.left1`      | left     | 4          |
| `s.left2`      | left     | 8          |
| `s.left4`      | left     | 16         |
| `s.left6`      | left     | 24         |
| `s.left8`      | left     | 32         |
| `s.leftFull`   | left     | '100%'     |
| `s.right0`     | right    | 0          |
| `s.right1`     | right    | 4          |
| `s.right2`     | right    | 8          |
| `s.right4`     | right    | 16         |
| `s.right6`     | right    | 24         |
| `s.right8`     | right    | 32         |
| `s.rightFull`  | right    | '100%'     |
| `s.inset0`     | top:0, right:0, bottom:0, left:0 |  |
| `s.insetX0`    | left:0, right:0  |  |
| `s.insetY0`    | top:0, bottom:0  |  |

---

### Z-Index

| Style Token    | Property | Value |
|---------------|----------|-------|
| `s.z0`        | zIndex   | 0     |
| `s.z10`       | zIndex   | 10    |
| `s.z20`       | zIndex   | 20    |
| `s.z30`       | zIndex   | 30    |
| `s.z40`       | zIndex   | 40    |
| `s.z50`       | zIndex   | 50    |
| `s.zDropdown` | zIndex   | 100   |
| `s.zSticky`   | zIndex   | 200   |
| `s.zFixed`    | zIndex   | 300   |
| `s.zBackdrop` | zIndex   | 400   |
| `s.zModal`    | zIndex   | 500   |
| `s.zPopover`  | zIndex   | 600   |
| `s.zTooltip`  | zIndex   | 700   |
| `s.zToast`    | zIndex   | 800   |
| `s.zTop`      | zIndex   | 999   |
| `s.zAuto`     | zIndex   | 'auto'|

---

### Transform

| Style Token          | Property  | Value                      |
|---------------------|-----------|----------------------------|
| `s.rotate0`         | transform | [{ rotate: '0deg' }]       |
| `s.rotate45`        | transform | [{ rotate: '45deg' }]      |
| `s.rotate90`        | transform | [{ rotate: '90deg' }]      |
| `s.rotate135`       | transform | [{ rotate: '135deg' }]     |
| `s.rotate180`       | transform | [{ rotate: '180deg' }]     |
| `s.rotate270`       | transform | [{ rotate: '270deg' }]     |
| `s.rotateN45`       | transform | [{ rotate: '-45deg' }]     |
| `s.rotateN90`       | transform | [{ rotate: '-90deg' }]     |
| `s.scaleX`          | transform | [{ scaleX: 1 }]            |
| `s.scale0`          | transform | [{ scale: 0 }]             |
| `s.scale50`         | transform | [{ scale: 0.5 }]           |
| `s.scale75`         | transform | [{ scale: 0.75 }]          |
| `s.scale90`         | transform | [{ scale: 0.9 }]           |
| `s.scale95`         | transform | [{ scale: 0.95 }]          |
| `s.scale100`        | transform | [{ scale: 1 }]             |
| `s.scale105`        | transform | [{ scale: 1.05 }]          |
| `s.scale110`        | transform | [{ scale: 1.1 }]           |
| `s.scale125`        | transform | [{ scale: 1.25 }]          |
| `s.scale150`        | transform | [{ scale: 1.5 }]           |
| `s.translateX0`     | transform | [{ translateX: 0 }]        |
| `s.translateX1`     | transform | [{ translateX: 4 }]        |
| `s.translateX2`     | transform | [{ translateX: 8 }]        |
| `s.translateX4`     | transform | [{ translateX: 16 }]       |
| `s.translateX8`     | transform | [{ translateX: 32 }]       |
| `s.translateXFull`  | transform | [{ translateX: 9999 }]     |
| `s.translateXNFull` | transform | [{ translateX: -9999 }]    |
| `s.translateY0`     | transform | [{ translateY: 0 }]        |
| `s.translateY1`     | transform | [{ translateY: 4 }]        |
| `s.translateY2`     | transform | [{ translateY: 8 }]        |
| `s.translateY4`     | transform | [{ translateY: 16 }]       |
| `s.translateY8`     | transform | [{ translateY: 32 }]       |
| `s.translateYFull`  | transform | [{ translateY: 9999 }]     |
| `s.translateYNFull` | transform | [{ translateY: -9999 }]    |
| `s.skewX0`          | transform | [{ skewX: '0deg' }]        |
| `s.skewX3`          | transform | [{ skewX: '3deg' }]        |
| `s.skewX6`          | transform | [{ skewX: '6deg' }]        |
| `s.skewX12`         | transform | [{ skewX: '12deg' }]       |
| `s.skewY0`          | transform | [{ skewY: '0deg' }]        |
| `s.skewY3`          | transform | [{ skewY: '3deg' }]        |
| `s.skewY6`          | transform | [{ skewY: '6deg' }]        |
| `s.skewY12`         | transform | [{ skewY: '12deg' }]       |

---

### Overflow

| Style Token        | Property  | Value     |
|-------------------|-----------|-----------|
| `s.overflowHidden` | overflow | 'hidden'  |
| `s.overflowVisible`| overflow | 'visible' |
| `s.overflowScroll` | overflow | 'scroll'  |

---

### Gap

| Style Token | Property | Value |
|------------|----------|-------|
| `s.gap0`   | gap      | 0     |
| `s.gap1`   | gap      | 4     |
| `s.gap2`   | gap      | 8     |
| `s.gap3`   | gap      | 12    |
| `s.gap4`   | gap      | 16    |
| `s.gap5`   | gap      | 20    |
| `s.gap6`   | gap      | 24    |
| `s.gap7`   | gap      | 28    |
| `s.gap8`   | gap      | 32    |
| `s.gap10`  | gap      | 40    |
| `s.gap12`  | gap      | 48    |
| `s.gap16`  | gap      | 64    |
| `s.gapX0`  | columnGap | 0    |
| `s.gapX1`  | columnGap | 4    |
| `s.gapX2`  | columnGap | 8    |
| `s.gapX3`  | columnGap | 12   |
| `s.gapX4`  | columnGap | 16   |
| `s.gapX5`  | columnGap | 20   |
| `s.gapX6`  | columnGap | 24   |
| `s.gapX8`  | columnGap | 32   |
| `s.gapX10` | columnGap | 40   |
| `s.gapX12` | columnGap | 48   |
| `s.gapY0`  | rowGap    | 0    |
| `s.gapY1`  | rowGap    | 4    |
| `s.gapY2`  | rowGap    | 8    |
| `s.gapY3`  | rowGap    | 12   |
| `s.gapY4`  | rowGap    | 16   |
| `s.gapY5`  | rowGap    | 20   |
| `s.gapY6`  | rowGap    | 24   |
| `s.gapY8`  | rowGap    | 32   |
| `s.gapY10` | rowGap    | 40   |
| `s.gapY12` | rowGap    | 48   |

---

### Aspect Ratio

| Style Token        | Property    | Value |
|-------------------|-------------|-------|
| `s.aspectSquare`  | aspectRatio | 1     |
| `s.aspectVideo`   | aspectRatio | 16/9  |
| `s.aspectPortrait`| aspectRatio | 3/4   |
| `s.aspect4_3`     | aspectRatio | 4/3   |
| `s.aspect21_9`    | aspectRatio | 21/9  |
| `s.aspect3_2`     | aspectRatio | 3/2   |
| `s.aspect2_3`     | aspectRatio | 2/3   |

---

### Icon Sizes

| Style Token    | width + height | Value |
|---------------|----------------|-------|
| `s.iconXs`    | width, height  | 12    |
| `s.iconSm`    | width, height  | 16    |
| `s.icon`      | width, height  | 20    |
| `s.iconMd`    | width, height  | 24    |
| `s.iconLg`    | width, height  | 32    |
| `s.iconXl`    | width, height  | 40    |
| `s.icon2xl`   | width, height  | 48    |
| `s.icon3xl`   | width, height  | 64    |

---

### Display

| Style Token    | Property | Value  |
|---------------|----------|--------|
| `s.hidden`    | display  | 'none' |
| `s.visible`   | display  | 'flex' |

---

### Component Presets

These are pre-composed, multi-property style bundles for common UI patterns.

| Style Token          | Description                                  | Composed From                                                  |
|---------------------|----------------------------------------------|----------------------------------------------------------------|
| `s.container`       | Full-width padded container                  | px4, maxWFull, wFull                                           |
| `s.card`            | Elevated card surface                        | bgSurface, roundedXl, shadowMd, p4, border, borderDefault      |
| `s.cardSm`          | Small card                                   | bgSurface, roundedLg, shadowSm, p3, border, borderDefault      |
| `s.cardLg`          | Large card                                   | bgSurface, rounded2xl, shadowLg, p6, border, borderDefault     |
| `s.cardFlat`        | Borderless flat card                         | bgSurface, roundedXl, p4                                       |
| `s.btn`             | Base button                                  | px4, py2, rounded, rowCenter, fontSemibold, textBase           |
| `s.btnSm`           | Small button                                 | px3, py1_5, roundedMd, rowCenter, fontMedium, textSm           |
| `s.btnLg`           | Large button                                 | px6, py3, roundedLg, rowCenter, fontSemibold, textLg           |
| `s.btnPrimary`      | Primary CTA button                           | btn, bgPrimary, textWhite, shadowSm                            |
| `s.btnSecondary`    | Secondary button                             | btn, bgSecondary, textWhite                                    |
| `s.btnDanger`       | Danger / destructive button                  | btn, bgDanger, textWhite                                       |
| `s.btnSuccess`      | Success button                               | btn, bgSuccess, textWhite                                      |
| `s.btnOutline`      | Outlined button                              | btn, bgTransparent, border2, borderPrimary, textPrimary        |
| `s.btnOutlineDanger`| Outlined danger button                       | btn, bgTransparent, border2, borderDanger, textDanger          |
| `s.btnGhost`        | Ghost/text button                            | btn, bgTransparent, textPrimary                                |
| `s.btnGhostDanger`  | Ghost danger button                          | btn, bgTransparent, textDanger                                 |
| `s.btnDisabled`     | Disabled state                               | opacity50                                                      |
| `s.input`           | Text input field                             | border, borderDefault, roundedLg, px3, py2_5, textBase, bgBackground |
| `s.inputSm`         | Small input                                  | border, borderDefault, roundedMd, px2_5, py2, textSm          |
| `s.inputLg`         | Large input                                  | border, borderDefault, roundedXl, px4, py3, textMd            |
| `s.inputFocused`    | Input focused state                          | border2, borderPrimary, shadowSm                               |
| `s.inputError`      | Input error state                            | border2, borderDanger                                          |
| `s.inputDisabled`   | Input disabled state                         | opacity50, bgGray100                                           |
| `s.label`           | Form label                                   | fontSemibold, textSm, textDefault, mb1                         |
| `s.helperText`      | Helper/hint text                             | textXs, textMuted, mt1                                         |
| `s.errorText`       | Error message text                           | textXs, textDanger, mt1                                        |
| `s.badge`           | Small status badge                           | px2, py0_5, roundedFull, textXs, fontSemibold                  |
| `s.badgePrimary`    | Primary badge                                | badge, bgBlue100, textBlue600                                  |
| `s.badgeSuccess`    | Success badge                                | badge, bgGreen100, textGreen600                                 |
| `s.badgeDanger`     | Danger badge                                 | badge, bgRed100, textRed600                                    |
| `s.badgeWarning`    | Warning badge                                | badge, bgAmber100, textAmber500                                 |
| `s.badgeInfo`       | Info badge                                   | badge, bgBlue100, textBlue600                                   |
| `s.badgeGray`       | Gray neutral badge                           | badge, bgGray100, textGray600                                   |
| `s.badgeDot`        | Small dot indicator                          | w2, h2, roundedFull, bgPrimary                                 |
| `s.badgeDotDanger`  | Red dot indicator                            | w2, h2, roundedFull, bgDanger                                  |
| `s.badgeDotSuccess` | Green dot indicator                          | w2, h2, roundedFull, bgSuccess                                 |
| `s.avatar`          | Base avatar                                  | roundedFull, overflow:hidden, bgGray200                        |
| `s.avatarXs`        | XS avatar 24×24                              | avatar, w6, h6                                                 |
| `s.avatarSm`        | SM avatar 32×32                              | avatar, w8, h8                                                 |
| `s.avatarMd`        | MD avatar 40×40                              | avatar, w10, h10                                               |
| `s.avatarLg`        | LG avatar 48×48                              | avatar, w12, h12                                               |
| `s.avatarXl`        | XL avatar 64×64                              | avatar, w16, h16                                               |
| `s.avatar2xl`       | 2XL avatar 96×96                             | avatar, w24, h24                                               |
| `s.avatarRing`      | Avatar with primary ring border              | border2, borderPrimary                                         |
| `s.divider`         | Horizontal rule divider                      | hFull, borderB, borderDefault, my2                             |
| `s.dividerVertical` | Vertical divider                             | wFull, borderL, borderDefault, mx2                             |
| `s.chip`            | Chip / tag element                           | px3, py1, roundedFull, border, borderDefault, textSm           |
| `s.chipSelected`    | Selected chip                                | px3, py1, roundedFull, bgPrimary, textWhite                    |
| `s.chipDisabled`    | Disabled chip                                | px3, py1, roundedFull, opacity50, bgGray100                    |
| `s.skeleton`        | Loading skeleton placeholder                 | bgGray200, roundedMd                                           |
| `s.skeletonRound`   | Round loading skeleton                       | bgGray200, roundedFull                                         |
| `s.overlay`         | Full-screen overlay backdrop                 | absolute, inset0, bgOverlay                                    |
| `s.overlayLight`    | Light overlay backdrop                       | absolute, inset0, bgGray100, opacity70                         |
| `s.modal`           | Modal container                              | bgBackground, rounded2xl, shadowXl, p6, mx4                   |
| `s.modalBackdrop`   | Modal backdrop                               | absolute, inset0, overlay, zBackdrop                           |
| `s.toast`           | Toast notification box                       | card, shadowLg, px4, py3, rowBetween, maxW2xl                  |
| `s.toastSuccess`    | Success toast                                | toast, borderL4, borderSuccess                                  |
| `s.toastDanger`     | Danger toast                                 | toast, borderL4, borderDanger                                  |
| `s.toastWarning`    | Warning toast                                | toast, borderL4, borderWarning                                  |
| `s.toastInfo`       | Info toast                                   | toast, borderL4, borderInfo                                    |
| `s.tabBar`          | Bottom tab bar base                          | flexRow, bgBackground, borderT, borderDefault, pt2, pb4        |
| `s.tabItem`         | Single tab item                              | flex1, colCenter, gap1                                         |
| `s.tabLabel`        | Tab label text                               | textXs, fontMedium, textMuted                                  |
| `s.tabLabelActive`  | Active tab label                             | textXs, fontSemibold, textPrimary                              |
| `s.header`          | Screen header bar                            | flexRow, itemsCenter, px4, h14, bgBackground, borderB, borderDefault |
| `s.headerTitle`     | Header title text                            | textMd, fontBold, textDefault                                   |
| `s.screenContent`   | Main screen body                             | flex1, bgBackground                                             |
| `s.safeArea`        | Safe area wrapper                            | flex1                                                           |
| `s.section`         | Content section wrapper                      | py6, px4                                                        |
| `s.sectionHeader`   | Section header                               | flexRow, justifyBetween, itemsCenter, mb3                       |
| `s.sectionTitle`    | Section heading text                         | textLg, fontBold, textDefault                                   |
| `s.sectionLink`     | Section action link                          | textSm, fontSemibold, textPrimary                               |
| `s.listItem`        | List row item                                | flexRow, itemsCenter, px4, py3, bgBackground, borderB, borderDefault |
| `s.listItemPressed` | List item pressed state                      | bgSlate50                                                       |
| `s.listItemTitle`   | List item primary text                       | textBase, fontMedium, textDefault                               |
| `s.listItemSubtitle`| List item secondary text                     | textSm, textMuted, mt0_5                                        |
| `s.listItemTrailing`| Right side of list item                      | flexRow, itemsCenter, gap2                                      |
| `s.emptyState`      | Empty state container                        | flex1, colCenter, p8, gap4                                      |
| `s.emptyStateTitle` | Empty state heading                          | text2xl, fontBold, textDefault                                  |
| `s.emptyStateBody`  | Empty state description                      | textBase, textMuted, textCenter                                 |
| `s.progressBar`     | Progress bar track                           | h2, bgGray200, roundedFull, overflowHidden                     |
| `s.progressFill`    | Progress fill                                | h2, bgPrimary, roundedFull                                     |
| `s.toggle`          | Toggle/Switch track                          | w12, h6, roundedFull                                           |
| `s.toggleOn`        | Toggle active state                          | bgPrimary                                                       |
| `s.toggleOff`       | Toggle inactive state                        | bgGray300                                                       |
| `s.toggleThumb`     | Toggle thumb knob                            | w5, h5, roundedFull, bgWhite, shadowSm, absolute               |
| `s.checkbox`        | Checkbox base                                | w5, h5, rounded, border2, borderDefault, center                |
| `s.checkboxChecked` | Checked checkbox                             | bgPrimary, borderPrimary                                        |
| `s.radio`           | Radio button base                            | w5, h5, roundedFull, border2, borderDefault, center            |
| `s.radioSelected`   | Selected radio                               | borderPrimary                                                   |
| `s.radioDot`        | Radio inner dot                              | w2_5, h2_5, roundedFull, bgPrimary                             |
| `s.searchBar`       | Search bar container                         | flexRow, itemsCenter, bgGray100, roundedFull, px4, py2, gap2   |
| `s.searchInput`     | Search input field inside bar                | flex1, textBase, textDefault                                    |
| `s.imageThumb`      | Image thumbnail                              | w16, h16, roundedMd, overflowHidden, bgGray100                 |
| `s.imageCover`      | Full cover image                             | wFull, hFull, aspectVideo                                       |
| `s.imageHero`       | Hero/banner image                            | wFull, h48, overflowHidden, bgGray100                           |
| `s.keyboardAvoid`   | Keyboard-avoiding wrapper                    | flex1                                                           |
| `s.scrollContent`   | ScrollView content container                 | px4, py6, gap4                                                  |
| `s.fabButton`       | Floating action button                       | absolute, bottom6, right6, w14, h14, roundedFull, bgPrimary, center, shadowXl, zFixed |
| `s.fabButtonSm`     | Small FAB                                    | absolute, bottom4, right4, w10, h10, roundedFull, bgPrimary, center, shadowMd, zFixed |

---

## Internal Moxie Variables

The following are the **complete** list of internal variables Moxie uses to build all 900+ tokens. All can be overridden in `moxie.config.ts`:

```
primary          primaryLight       primaryDark
secondary        secondaryLight     secondaryDark
accent           accentLight        accentDark
danger           dangerLight        dangerDark
success          successLight       successDark
warning          warningLight       warningDark
info             infoLight          infoDark
background       backgroundDark
surface          surfaceDark
overlay          overlayLight       overlayDark
text             textMuted          textDisabled     textInverse
textDanger       textSuccess        textWarning      textInfo
borderColor      borderColorDark    borderWidth      borderWidthMd    borderWidthLg
radiusNone       radiusSm           radiusMd         radiusLg
radiusXl         radius2xl          radius3xl        radiusFull
spacingBase
fontFamily       fontFamilyMono     fontFamilySerif
fontSizeXs       fontSizeSm         fontSizeBase     fontSizeMd
fontSizeLg       fontSizeXl         fontSize2xl      fontSize3xl
fontSize4xl      fontSize5xl        fontSize6xl      fontSize7xl
fontWeightThin   fontWeightExtraLight  fontWeightLight  fontWeightNormal
fontWeightMedium fontWeightSemibold    fontWeightBold   fontWeightExtrabold
fontWeightBlack
lineHeightTight  lineHeightSnug     lineHeightNormal  lineHeightRelaxed  lineHeightLoose
letterSpacingTight  letterSpacingNormal  letterSpacingWide  letterSpacingWider  letterSpacingWidest
shadowColor      shadowColorPrimary
shadowXs         shadowSm           shadowMd          shadowLg          shadowXl          shadow2xl
durationFast     durationNormal     durationSlow      durationSlower
zIndexBase       zIndexDropdown     zIndexSticky      zIndexFixed
zIndexModalBackdrop  zIndexModal    zIndexPopover     zIndexTooltip     zIndexToast       zIndexTop
opacity0..opacity100
platformIos      platformAndroid    platformWeb
```

---

## Platform Behavior

Moxie uses `Platform` from React Native internally. Shadow styles are automatically adapted:

```ts
// iOS: uses shadowColor, shadowOffset, shadowOpacity, shadowRadius
// Android: uses elevation only
// Web: uses boxShadow

// You can also pass platform-specific overrides in your config:
defineMoxieConfig({
  platformIos: {
    fontFamily: 'SF Pro Display',
  },
  platformAndroid: {
    fontFamily: 'Roboto',
  },
  platformWeb: {
    fontFamily: 'Inter, sans-serif',
  },
});
```

---

## TypeScript Support

Moxie ships full TypeScript definitions.

```ts
import type { MoxieConfig, MoxieStyles, MoxieTokens } from 'moxie-native-styles';

// Config is fully typed — autocomplete all keys
const config: MoxieConfig = { ... };

// Access individual style keys
type StyleKey = keyof MoxieStyles; // 'flex1' | 'bgPrimary' | 'textXl' | ...

// Access token values
const { tokens } = useMoxie();
tokens.primary; // string (hex color)
tokens.spacingBase; // number
```

---

## Advanced Usage

### Dynamic Styles with Tokens

```tsx
const { s, tokens } = useMoxie();

<View style={[s.card, { backgroundColor: tokens.primary + '20' }]} />
```

### Conditional Styles

```tsx
<View style={[s.btn, isActive ? s.btnPrimary : s.btnOutline]} />
```

### Custom Style Extension

```tsx
import { StyleSheet } from 'react-native';
const { s } = useMoxie();

const styles = StyleSheet.create({
  hero: {
    ...s.card,
    ...s.shadowXl,
    minHeight: 200,
  },
});
```

### Dark Mode

```tsx
<Moxie config={moxieConfig} theme="system">
  {children}
</Moxie>
```

Moxie listens to the system color scheme and swaps `background` ↔ `backgroundDark`, `surface` ↔ `surfaceDark`, `text` and border tokens automatically when `theme="system"` or `theme="dark"`.

---

## Changelog

### v1.0.0
- 900+ predefined styles
- Full `moxie.config.ts` token system
- `<Moxie>` provider
- `useMoxie()` hook
- Platform-adaptive shadows (iOS / Android / Web)
- Dark mode support
- Full TypeScript definitions
- Component presets (button, card, input, badge, avatar, modal, toast, tab bar, list, FAB, and more)

---

> Made with 💙 — Primary is always Blue.