export type OperatorRole =
  | 'shift_lead'
  | 'analyst'
  | 'hunter'
  | 'grc'
  | 'ciso'
  | 'admin';

export type SessionOperator = {
  userId: string;
  email: string;
  displayName: string;
  role: OperatorRole;
};

const OPERATOR_KEY = 'alertworth.session.operator';
const AUTH_KEY = 'alertworth.session.auth';

export function getSessionOperator(): SessionOperator | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(OPERATOR_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionOperator;
  } catch {
    return null;
  }
}

export function setSessionOperator(op: SessionOperator): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(OPERATOR_KEY, JSON.stringify(op));
  window.localStorage.setItem(AUTH_KEY, '1');
}

export function clearSessionOperator(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(OPERATOR_KEY);
  window.localStorage.removeItem(AUTH_KEY);
}

export function isSessionAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(AUTH_KEY) === '1';
}
