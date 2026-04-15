import React, { useMemo, useEffect } from 'react';
import { Platform } from 'react-native';
import { MoxieContext } from './context';
import { MoxieConfig, MoxieContextType, MoxieStyles } from './types';
import { defaultTokens } from './defaults';
import { generateStyles } from './styles';

// Static object for access outside React (singleton-like behavior)
export const moxie: { s: MoxieStyles; tokens: any; platform: any; darkMode: boolean } = {
  s: {},
  tokens: defaultTokens,
  platform: Platform.OS,
  darkMode: false,
};

interface MoxieProps {
  config?: MoxieConfig;
  darkMode?: boolean;
  theme?: 'light' | 'dark' | 'system';
  debug?: boolean;
  children: React.ReactNode;
}

export const Moxie: React.FC<MoxieProps> = ({ config, darkMode = false, theme = 'light', debug = false, children }) => {
  const contextValue = useMemo(() => {
    // 1. Start with defaults
    let mergedTokens = { ...defaultTokens };

    // 2. Merge user global config
    if (config) {
      const { platformIos, platformAndroid, platformWeb, ...globalConfig } = config;
      mergedTokens = { ...mergedTokens, ...globalConfig };
      
      // 3. Platform Specific Overrides
      const platformKey = Platform.select({
        ios: 'platformIos',
        android: 'platformAndroid',
        web: 'platformWeb',
        default: null,
      }) as keyof MoxieConfig | null;

      if (platformKey && config[platformKey]) {
        mergedTokens = { ...mergedTokens, ...(config[platformKey] as any) };
      }
    }

    // 4. Generate Styles
    const s = generateStyles(mergedTokens, darkMode);

    if (debug) {
      console.log('[Moxie] Styles Generated', { tokens: mergedTokens, darkMode });
    }

    return {
      s,
      tokens: mergedTokens,
      platform: (Platform.OS === 'ios' || Platform.OS === 'android' || Platform.OS === 'web') ? Platform.OS : 'web' as const,
      darkMode,
    };
  }, [config, darkMode, theme, debug]);

  // Sync static object
  useEffect(() => {
    moxie.s = contextValue.s;
    moxie.tokens = contextValue.tokens;
    moxie.platform = contextValue.platform;
    moxie.darkMode = contextValue.darkMode;
  }, [contextValue]);

  return (
    <MoxieContext.Provider value={contextValue}>
      {children}
    </MoxieContext.Provider>
  );
};
