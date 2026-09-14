/**
 * Base fetch helper for Alertworth API.
 * Generated domain services should prefer this (or wrap it) once wired.
 */
const DEFAULT_BASE = 'http://127.0.0.1:4000';

export function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL || DEFAULT_BASE;
}

export type ApiError = Error & {
  status?: number;
  data?: unknown;
};

export async function apiFetch<T = unknown>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const base = getApiBaseUrl().replace(/\/+$/, '');
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  const headers = new Headers(init?.headers);
  if (!headers.has('Accept')) headers.set('Accept', 'application/json');
  if (init?.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const res = await fetch(url, { ...init, headers });
  const text = await res.text();
  let data: unknown = undefined;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!res.ok) {
    const err = new Error(
      typeof data === 'object' &&
        data &&
        'detail' in data &&
        typeof (data as { detail?: unknown }).detail === 'string'
        ? (data as { detail: string }).detail
        : `Request failed (${res.status})`,
    ) as ApiError;
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data as T;
}
