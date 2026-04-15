# moxie-native-styles

> **900+ predefined styles for React Native — configured once, applied everywhere.**

`moxie-native-styles` is a zero-runtime, fully typed styling utility for React Native.

## Features

- 🚀 **900+ predefined styles** (Spacing, Typography, Colors, Borders, etc.)
- 🔌 **Configurable** design system via `moxie.config.ts`
- 🌓 **Dark Mode** support out of the box
- 📱 **Platform Aware** (iOS, Android, Web)
- 🏗 **Component Presets** (Button, Card, Input, Avatar, etc.)
- 📦 **Zero Runtime** (styles are generated once and cached)

## Installation

```bash
pnpm add moxie-native-styles
```

## Quick Start

### 1. Create your config

```ts
// moxie.config.ts
import { defineMoxieConfig } from 'moxie-native-styles';

export default defineMoxieConfig({
  primary: '#2563EB',
  fontFamily: 'System',
});
```

### 2. Wrap your root layout

```tsx
import { Moxie } from 'moxie-native-styles';
import moxieConfig from './moxie.config';

export default function App() {
  return (
    <Moxie config={moxieConfig}>
      {/* Your components */}
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

## Animations (Subtle & Smooth)

Moxie comes with built-in declarative animations that use your theme tokens for duration and easing.

```tsx
import { FadeIn, SlideIn, Pulse, Float, useMoxie } from 'moxie-native-styles';

export default function Welcome() {
  const { s } = useMoxie();
  
  return (
    <SlideIn direction="up">
      <View style={[s.card]}>
        <Pulse>
          <Text style={[s.textBlue600]}>New Feature!</Text>
        </Pulse>
        <FadeIn delay={300}>
          <Text style={[s.textMuted]}>Try out our new dashboard.</Text>
        </FadeIn>
      </View>
    </SlideIn>
  );
}
```

## Primitives (`<Box>`, `<Text>`, `<Flex>`)

Moxie Primitives allow you to write UI using Moxie style keys directly as props.

```tsx
import { Box, Text, Flex, Button } from 'moxie-native-styles';

export default function PremiumScreen() {
  return (
    <Box flex1 bgBackground p4 center>
      <GlassCard p6 rounded2xl>
         <Text fontBold text3xl mb2>Hello Primitives</Text>
         <Flex gap4 itemsCenter>
            <Box bgBlue100 roundedFull p2><Icon name="info" /></Box>
            <Text textMuted>This layout is built with props!</Text>
         </Flex>
         <Button label="Get Started" mt6 roundedFull />
      </GlassCard>
    </Box>
  );
}
```

## Responsive Styles

Config your breakpoints once:

```ts
// moxie.config.ts
export default defineMoxieConfig({
  breakpoints: { sm: 640, md: 768, lg: 1024 }
});
```

Moxie automatically recalculates styles on device rotation or resize.

## Toasts (`toast.success()`)

Moxie includes a beautiful, Sonner-inspired toast system with **built-in (follow come) Lucide icons**.

### 1. Add the Container
Place the `<ToastContainer />` at the root of your app.

```tsx
import { Moxie, ToastContainer } from 'moxie-native-styles';

export default function App() {
  return (
    <Moxie config={config}>
      <YourApp />
      <ToastContainer position="bottom-right" />
    </Moxie>
  );
}
```

### 2. Show Toasts Anywhere
No hooks required for the basic API!

```tsx
import { toast } from 'moxie-native-styles';

// Simple usage
toast.show("Welcome back!");

// Semantic toasts with icons
toast.success("Profile updated");
toast.error("Connection failed");
toast.warning("Low battery");
toast.info("New message received");
```

## License

MIT
