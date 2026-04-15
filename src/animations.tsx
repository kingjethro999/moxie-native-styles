import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';
import { useMoxie } from './hooks';

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: ViewStyle | ViewStyle[];
}

export const FadeIn: React.FC<AnimateProps> = ({ children, delay = 0, duration, style }) => {
  const { tokens } = useMoxie();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration || tokens.durationNormal,
      delay,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>;
};

export const SlideIn: React.FC<AnimateProps & { direction?: 'up' | 'down' | 'left' | 'right'; distance?: number }> = ({ 
  children, 
  delay = 0, 
  duration, 
  direction = 'up', 
  distance = 50,
  style 
}) => {
  const { tokens } = useMoxie();
  const translate = useRef(new Animated.Value(distance)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: 0,
        duration: duration || tokens.durationNormal,
        delay,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: (duration || tokens.durationNormal) * 0.8,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const transform = direction === 'up' ? [{ translateY: translate }] :
                    direction === 'down' ? [{ translateY: Animated.multiply(translate, -1) }] :
                    direction === 'left' ? [{ translateX: translate }] :
                    [{ translateX: Animated.multiply(translate, -1) }];

  return <Animated.View style={[{ opacity, transform }, style]}>{children}</Animated.View>;
};

export const Pulse: React.FC<AnimateProps & { scale?: number }> = ({ 
  children, 
  duration, 
  scale = 1.05, 
  style 
}) => {
  const { tokens } = useMoxie();
  const pulseVal = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseVal, {
          toValue: scale,
          duration: duration || tokens.durationSlow,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseVal, {
          toValue: 1,
          duration: duration || tokens.durationSlow,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return <Animated.View style={[{ transform: [{ scale: pulseVal }] }, style]}>{children}</Animated.View>;
};

export const Float: React.FC<AnimateProps & { distance?: number }> = ({ 
  children, 
  duration, 
  distance = 10, 
  style 
}) => {
  const { tokens } = useMoxie();
  const floatVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatVal, {
          toValue: distance,
          duration: duration || tokens.durationSlower,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(floatVal, {
          toValue: 0,
          duration: duration || tokens.durationSlower,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return <Animated.View style={[{ transform: [{ translateY: floatVal }] }, style]}>{children}</Animated.View>;
};
