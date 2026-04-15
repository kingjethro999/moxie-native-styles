import React, { useContext } from 'react';
import { MoxieContext } from './context';
import { MoxieContextType } from './types';

export const useMoxie = (): MoxieContextType => {
  const context = useContext(MoxieContext);
  if (!context) {
    throw new Error('useMoxie must be used within a <Moxie> provider');
  }
  return context;
};

export function withMoxie<P extends object>(Component: React.ComponentType<P & { moxie: MoxieContextType }>) {
  return function WrappedComponent(props: P) {
    const moxieValue = useMoxie();
    return <Component {...props} moxie={moxieValue} />;
  };
}
