import React, { useState, useCallback, useImperativeHandle, forwardRef, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { useMoxie } from './hooks';
import { Box, Flex } from './components';
import { SlideIn, FadeIn } from './animations';
import { CheckCircle2, AlertCircle, Info as InfoIcon, AlertTriangle, X } from 'lucide-react-native';

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastState extends ToastOptions {
  id: string;
}

// Internal emitter pattern if we want to avoid deep context for simple toasts
let toastEmitter: (options: ToastOptions) => void = () => {};

export const toast = {
  show: (message: string, options?: Omit<ToastOptions, 'message'>) => {
    toastEmitter({ message, ...options });
  },
  success: (message: string) => toastEmitter({ message, type: 'success' }),
  error: (message: string) => toastEmitter({ message, type: 'error' }),
  info: (message: string) => toastEmitter({ message, type: 'info' }),
  warning: (message: string) => toastEmitter({ message, type: 'warning' }),
};

export const ToastContainer: React.FC<{ position?: ToastPosition }> = ({ position = 'bottom-center' }) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const { s, tokens } = useMoxie();

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  toastEmitter = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substring(7);
    const newToast: ToastState = { 
      id, 
      type: 'default', 
      duration: 3000, 
      ...options 
    };
    
    setToasts((prev) => [...prev, newToast]);
    
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }, [removeToast]);

  const isTop = position.startsWith('top');
  const isLeft = position.includes('left');
  const isRight = position.includes('right');

  const containerStyle: any = {
    position: 'absolute',
    left: isLeft ? 20 : (isRight ? undefined : 0),
    right: isRight ? 20 : (isLeft ? undefined : 0),
    top: isTop ? 50 : undefined,
    bottom: !isTop ? 50 : undefined,
    alignItems: isLeft ? 'flex-start' : (isRight ? 'flex-end' : 'center'),
    width: (isLeft || isRight) ? undefined : '100%',
    zIndex: tokens.zIndexToast,
  };

  return (
    <View pointerEvents="box-none" style={containerStyle}>
      {toasts.map((t) => (
         <ToastItem key={t.id} toast={t} onDismiss={() => removeToast(t.id)} />
      ))}
    </View>
  );
};



const ToastItem: React.FC<{ toast: ToastState, onDismiss: () => void }> = ({ toast, onDismiss }) => {
  const { s, tokens } = useMoxie();
  
  const typeStyles = {
    success: s.borderSuccess,
    error: s.borderDanger,
    info: s.borderInfo,
    warning: s.borderWarning,
    default: s.borderDefault,
  };

  const Icon = {
    success: CheckCircle2,
    error: AlertCircle,
    info: InfoIcon,
    warning: AlertTriangle,
    default: null,
  }[toast.type || 'default'];

  const iconColor = {
    success: tokens.success,
    error: tokens.danger,
    info: tokens.info,
    warning: tokens.warning,
    default: tokens.text,
  }[toast.type || 'default'];

  return (
    <SlideIn direction="up" distance={20} style={[s.mb2]}>
      <Box 
        glass 
        p3 
        px4 
        roundedXl 
        shadowLg 
        borderL4 
        style={[typeStyles[toast.type || 'default'], { minWidth: 200, maxWidth: 350 }]}
      >
        <Flex itemsCenter>
            {Icon && <Icon size={18} color={iconColor} style={[s.mr3]} />}
            <Text style={[s.textDefault, s.fontMedium, s.textSm, s.flex1]}>{toast.message}</Text>
        </Flex>
      </Box>
    </SlideIn>
  );
};
