'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-7PDFFZ2RVN';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track page views when path changes
  useEffect(() => {
    if (pathname) {
      // Check if gtag is defined before using it
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title
          });
        `}
      </Script>
    </>
  );
}

// Add TypeScript declaration for global gtag function
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
