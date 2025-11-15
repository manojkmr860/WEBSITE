import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (
      action: 'init' | 'track',
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

const FacebookPixel = () => {
  useEffect(() => {
    const pixelId = '1150296790566665';
    const isProduction = import.meta.env.PROD;

    if (!isProduction) {
      console.log('[Facebook Pixel] Skipped: Not in production');
      return;
    }

    if (window.fbq) {
      console.log('[Facebook Pixel] Already loaded');
      return;
    }

    try {
      // Facebook Pixel Code
      (function(f, b, e, v, n, t, s) {
        if ((f as { fbq?: unknown }).fbq) return;
        n = (f as { fbq?: unknown }).fbq = function() {
          const nCallMethod = (n as { callMethod?: unknown }).callMethod;
          nCallMethod
            ? nCallMethod.apply(n, arguments)
            : ((n as { queue?: unknown[] }).queue || []).push(arguments);
        };
        if (!(f as { _fbq?: unknown })._fbq) (f as { _fbq?: unknown })._fbq = n;
        (n as { push?: unknown }).push = n;
        (n as { loaded?: boolean }).loaded = true;
        (n as { version?: string }).version = '2.0';
        (n as { queue?: unknown[] }).queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      // Initialize and track PageView
      if (window.fbq) {
        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');
        console.log('[Facebook Pixel] Initialized with ID:', pixelId);
      }
    } catch (error) {
      console.error('[Facebook Pixel] Failed to initialize:', error);
    }
  }, []);

  return (
    <>
      {/* Noscript fallback for Facebook Pixel */}
      {import.meta.env.PROD && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1150296790566665&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      )}
    </>
  );
};

export default FacebookPixel;

