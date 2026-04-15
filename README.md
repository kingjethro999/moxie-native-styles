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

## License

MIT
