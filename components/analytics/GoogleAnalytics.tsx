'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

const GA_MEASUREMENT_ID = 'G-7PDFFZ2RVN';
const GA_DEBUG_MODE = false; // Set to true to enable console debug logs

// Utility function to track custom events
// Make this available globally so it can be called from anywhere in the app
export const trackEvent = (
  eventName: string, 
  eventParams: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      send_to: GA_MEASUREMENT_ID
    });
    
    if (GA_DEBUG_MODE) {
      console.log(`🔔 Event tracked: ${eventName}`, eventParams);
    }
  } else if (GA_DEBUG_MODE) {
    console.log(`⚠️ Failed to track event "${eventName}": gtag not available`);
  }
};

// Track file downloads
export const trackDownload = (fileUrl: string, fileType: string, fileName: string) => {
  trackEvent('file_download', {
    file_url: fileUrl,
    file_extension: fileType,
    file_name: fileName,
    content_type: 'download'
  });
};

// This component handles the page view tracking with search params
// It's wrapped in Suspense in the main component
function PageViewTracker() {
  const pathname = usePathname();
  const [url, setUrl] = useState<string | null>(null);
  
  // Log analytics debug info if debug mode is enabled
  const logAnalyticsDebug = (message: string, data?: any) => {
    if (GA_DEBUG_MODE) {
      console.log(`🔍 GA Debug: ${message}`, data || '');
    }
  };
  
  // Get search params safely client-side only
  useEffect(() => {
    // This ensures we're only running on the client and can access window
    if (typeof window !== 'undefined') {
      const searchParamsString = window.location.search;
      const fullUrl = searchParamsString 
        ? `${pathname}${searchParamsString}`
        : pathname;
      setUrl(fullUrl);
    }
  }, [pathname]);
  
  // Handle page views when path or search params change
  useEffect(() => {
    if (url) {
      const handlePageView = () => {
        if (typeof window !== 'undefined' && window.gtag) {
          logAnalyticsDebug(`📊 Page view triggered for: ${url}`);
          
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: url,
            send_to: GA_MEASUREMENT_ID
          });
          
          // Also send a standard config call which helps with GA4 reporting
          window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url
          });
        } else {
          logAnalyticsDebug('⚠️ gtag not available on window object');
        }
      };
      
      // Use a slight delay to ensure everything is loaded
      const timer = setTimeout(() => {
        handlePageView();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [url]);
  
  // This component doesn't render anything
  return null;
}

export default function GoogleAnalytics() {
  // Handle script load events
  const handleGtagLoaded = () => {
    if (GA_DEBUG_MODE) {
      console.log('✅ Google Analytics script loaded successfully');
    }
  };

  const handleGtagError = () => {
    if (GA_DEBUG_MODE) {
      console.log('❌ Error loading Google Analytics script');
    }
  };

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={handleGtagLoaded}
        onError={handleGtagError}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Initialize GA4 with standard configuration
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title,
            cookie_flags: 'samesite=none;secure'
          });
          
          // Custom event that helps debug if GA is loading correctly
          gtag('event', 'ga_initialized', {
            send_to: '${GA_MEASUREMENT_ID}'
          });
          
          ${GA_DEBUG_MODE ? "console.log('🔰 Google Analytics initialized with ID: " + GA_MEASUREMENT_ID + "');" : ''}
        `}
      </Script>
      
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
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
