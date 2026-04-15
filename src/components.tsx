import React from 'react';
import { 
  View, 
  Text as RNText, 
  Pressable as RNPressable, 
  ViewProps, 
  TextProps, 
  PressableProps,
  StyleProp,
  ViewStyle
} from 'react-native';
import { useMoxie } from './hooks';

type MoxieStyleKeys = any; // In real usage, this would be keyof MoxieStyles

interface BaseMoxieProps {
  [key: string]: any;
}

const extractMoxieStyles = (props: any, s: any) => {
  const styles: any[] = [];
  const remainingProps: any = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value === true && s[key]) {
      styles.push(s[key]);
    } else if (typeof value === 'string' && s[`${key}${value.charAt(0).toUpperCase() + value.slice(1)}`]) {
       // e.g. bg="primary" -> s.bgPrimary
       const styleKey = `${key}${value.charAt(0).toUpperCase() + value.slice(1)}`;
       styles.push(s[styleKey]);
    } else if (key.startsWith('p') || key.startsWith('m') || key.startsWith('w') || key.startsWith('h')) {
      // shorthand like p={4} -> s.p4
      const styleKey = `${key}${value}`.replace('.', '_');
      if (s[styleKey]) styles.push(s[styleKey]);
      else remainingProps[key] = value;
    } else {
      remainingProps[key] = value;
    }
  });

  return { styles, remainingProps };
};

export const Box: React.FC<ViewProps & BaseMoxieProps> = ({ style, ...props }) => {
  const { s } = useMoxie();
  const { styles, remainingProps } = extractMoxieStyles(props, s);
  
  return <View style={[styles, style]} {...remainingProps} />;
};

export const Flex: React.FC<ViewProps & BaseMoxieProps> = ({ style, ...props }) => {
  const { s } = useMoxie();
  const { styles, remainingProps } = extractMoxieStyles({ flexRow: true, ...props }, s);
  
  return <View style={[styles, style]} {...remainingProps} />;
};

export const Text: React.FC<TextProps & BaseMoxieProps> = ({ style, ...props }) => {
  const { s } = useMoxie();
  const { styles, remainingProps } = extractMoxieStyles(props, s);
  
  return <RNText style={[styles, style]} {...remainingProps} />;
};

export const Button: React.FC<PressableProps & BaseMoxieProps & { label?: string; labelStyle?: StyleProp<ViewStyle> }> = ({ 
  style, 
  label, 
  labelStyle,
  ...props 
}) => {
  const { s } = useMoxie();
  const { styles, remainingProps } = extractMoxieStyles({ btn: true, btnPrimary: !props.btnSecondary && !props.btnOutline, ...props }, s);

  return (
    <RNPressable 
      style={({ pressed }) => [
        styles, 
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
        typeof style === 'function' ? style({ pressed }) : style
      ]} 
      {...remainingProps}
    >
      {label ? <RNText style={[s.textWhite, s.fontSemibold, labelStyle]}>{label}</RNText> : props.children}
    </RNPressable>
  );
};
