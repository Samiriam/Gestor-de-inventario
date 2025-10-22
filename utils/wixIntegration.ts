const DEFAULT_BOOKINGS_URL = '#reservas';
const DEFAULT_STORE_URL = '#entradas';
const LIGHTBOX_PREFIX = 'lightbox:';

const readEnvUrl = (key: string): string | undefined => {
  const envRecord = import.meta.env as Record<string, string | undefined>;
  const rawValue = envRecord[key];
  if (!rawValue) {
    return undefined;
  }

  const trimmed = rawValue.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeUrl = (value: string | undefined, fallback: string): string => {
  const candidate = value ?? fallback;
  const trimmed = candidate.trim();

  if (!trimmed) {
    return fallback;
  }

  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('/') ||
    trimmed.startsWith('//') ||
    trimmed.startsWith(LIGHTBOX_PREFIX) ||
    /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
  ) {
    return trimmed;
  }

  return `/${trimmed}`;
};

const hasWindowObject = () => typeof window !== 'undefined';

const prefersReducedMotion = (): boolean => {
  if (!hasWindowObject() || typeof window.matchMedia !== 'function') {
    return false;
  }

  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

const smoothScrollToAnchor = (anchor: string): boolean => {
  if (!hasWindowObject() || typeof document === 'undefined') {
    return false;
  }

  const element = document.querySelector(anchor);
  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  return true;
};

const getWixLocation = () => {
  if (!hasWindowObject()) {
    return undefined;
  }

  return window.wixLocation ?? window.Wix?.Location;
};

const navigateTo = (target: string): boolean => {
  if (!hasWindowObject()) {
    return false;
  }

  const url = target.trim();
  if (!url) {
    return false;
  }

  if (url.startsWith(LIGHTBOX_PREFIX) && window.wixWindow?.openLightbox) {
    void window.wixWindow.openLightbox(url.slice(LIGHTBOX_PREFIX.length));
    return true;
  }

  if (url.startsWith('#')) {
    if (smoothScrollToAnchor(url)) {
      return true;
    }

    if (url.length > 1) {
      try {
        window.location.hash = url.slice(1);
        return true;
      } catch {
        // Ignore failures and fall back to assign.
      }
    }

    window.location.assign(url);
    return true;
  }

  const wixLocation = getWixLocation();
  if (wixLocation?.to) {
    wixLocation.to(url);
    return true;
  }

  window.location.assign(url);
  return true;
};

export const getBookingsUrl = () => normalizeUrl(readEnvUrl('VITE_WIX_BOOKINGS_URL'), DEFAULT_BOOKINGS_URL);

export const getStoreUrl = () => normalizeUrl(readEnvUrl('VITE_WIX_STORE_URL'), DEFAULT_STORE_URL);

export const navigateToBookings = () => navigateTo(getBookingsUrl());

export const navigateToStore = () => navigateTo(getStoreUrl());

export const isWixEnvironment = () =>
  hasWindowObject() && (!!window.Wix || !!window.wixLocation || !!window.wixWindow);

declare global {
  interface Window {
    wixLocation?: {
      to: (url: string) => void;
    };
    Wix?: {
      Location?: {
        to: (url: string) => void;
      };
    };
    wixWindow?: {
      openLightbox: (name: string, data?: unknown) => Promise<unknown> | void;
    };
  }
}
