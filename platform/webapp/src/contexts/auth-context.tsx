'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  clearSessionOperator,
  getSessionOperator,
  isSessionAuthenticated,
  setSessionOperator,
  type SessionOperator,
} from '@/lib/session';

type AuthContextValue = {
  ready: boolean;
  authenticated: boolean;
  operator: SessionOperator | null;
  enterShift: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [operator, setOperator] = useState<SessionOperator | null>(null);

  useEffect(() => {
    setAuthenticated(isSessionAuthenticated());
    setOperator(getSessionOperator());
    setReady(true);
  }, []);

  const enterShift = useCallback(() => {
    const op: SessionOperator = {
      userId: 'op_shift_local',
      email: 'shift.lead@alertworth.local',
      displayName: 'M. Chen',
      role: 'shift_lead',
    };
    setSessionOperator(op);
    setOperator(op);
    setAuthenticated(true);
  }, []);

  const signOut = useCallback(() => {
    clearSessionOperator();
    setOperator(null);
    setAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ ready, authenticated, operator, enterShift, signOut }),
    [ready, authenticated, operator, enterShift, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
