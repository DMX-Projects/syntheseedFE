/* analytics.ts
 * Minimal GA4 wrapper for this SPA.
 * - Reads Vite env VITE_GA_MEASUREMENT_ID
 * - Dynamically loads gtag.js
 * - Exposes initAnalytics, trackPageView, trackEvent, trackFormSubmission, setUserProperties, optOut
 */

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || undefined;
const GA_DEBUG = (import.meta.env.VITE_GA_DEBUG as string) === 'true';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

let initialized = false;

function ensureGtag(measurementId: string) {
  if (!measurementId) return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer!.push(arguments);
  }
  window.gtag = gtag as any;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  // initialize config
  window.dataLayer!.push({ js: new Date() });
  // set debug_mode if requested locally
  const config: Record<string, any> = { anonymize_ip: true };
  if (GA_DEBUG) config.debug_mode = true;
  window.dataLayer!.push({ config: measurementId, ...config });
}

export function initAnalytics(opts?: { consentGiven?: boolean }) {
  if (!GA_MEASUREMENT_ID) return;
  if (initialized) return;
  if (opts?.consentGiven === false) return; // respect consent

  ensureGtag(GA_MEASUREMENT_ID);
  initialized = true;
}

export function trackPageView(path: string, title?: string) {
  if (!window.gtag) return;
  try {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  } catch (e) {
    // swallow
  }
}

export function trackEvent(action: string, params?: Record<string, any>) {
  if (!window.gtag) return;
  try {
    window.gtag('event', action, params || {});
  } catch (e) {}
}

export function trackFormSubmission(formName: string, success: boolean, extra?: Record<string, any>) {
  if (!window.gtag) return;
  try {
    window.gtag('event', 'form_submission', {
      form_name: formName,
      success,
      ...extra,
    });
  } catch (e) {}
}

export function setUserProperties(props: Record<string, any>) {
  if (!window.gtag) return;
  try {
    window.gtag('set', 'user_properties', props);
  } catch (e) {}
}

// Persist opt-out locally and remove gtag hooks if requested
export function optOutAnalytics() {
  try {
    localStorage.setItem('ga_consent', 'denied');
  } catch (e) {}
}

export function getConsentFromStorage(): 'granted' | 'denied' | 'unknown' {
  try {
    const v = localStorage.getItem('ga_consent');
    if (v === 'granted') return 'granted';
    if (v === 'denied') return 'denied';
  } catch (e) {}
  return 'unknown';
}

export default {
  initAnalytics,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  setUserProperties,
  optOutAnalytics,
  getConsentFromStorage,
};
