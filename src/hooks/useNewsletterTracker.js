import { useEffect, useState } from 'react';
import { recordNewsletterView, formatLastViewedDate } from '../utils/newsletterTracker';

/**
 * Custom hook to track newsletter views via Firebase Firestore
 * Call this in any newsletter detail component to automatically record views
 * 
 * @param {string} newsletterId - The route path of the newsletter (e.g., "/NewsletterDetailPage12")
 * @param {string} title - The title of the newsletter
 * @returns {Object} { viewCount, lastViewed, loading }
 */
const useNewsletterTracker = (newsletterId, title = '') => {
  const [viewCount, setViewCount] = useState(0);
  const [lastViewed, setLastViewed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const trackView = async () => {
      try {
        const result = await recordNewsletterView(newsletterId, title);
        if (isMounted && result) {
          setViewCount(result.viewCount || 0);
          setLastViewed(formatLastViewedDate(result.lastViewedAt));
        }
      } catch (error) {
        console.error('Error tracking newsletter view:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    trackView();

    return () => {
      isMounted = false;
    };
  }, [newsletterId, title]);

  return { viewCount, lastViewed, loading };
};

export default useNewsletterTracker;
