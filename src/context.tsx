import React, { createContext } from 'react';
import { MoxieContextType } from './types';

export const MoxieContext = createContext<MoxieContextType | null>(null);
