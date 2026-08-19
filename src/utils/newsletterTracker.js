/**
 * Newsletter View Tracker - Firebase Firestore based
 * Tracks view counts globally so ALL users can see the same data
 * Falls back gracefully if offline
 */

import { db } from '../firebase/firebaseConfig';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  collection, 
  getDocs 
} from 'firebase/firestore';

const COLLECTION_NAME = 'newsletter_views';

/**
 * Convert a newsletter route path to a safe Firestore document ID
 */
const toDocId = (newsletterId) => {
  return newsletterId.replace(/\//g, '_').replace(/^_/, '');
};

/**
 * Record a view for a specific newsletter (increments global counter in Firestore)
 * @param {string} newsletterId - Unique identifier for the newsletter (e.g., route path)
 * @param {string} title - Title of the newsletter
 * @returns {Promise<Object>} Updated view data
 */
export const recordNewsletterView = async (newsletterId, title = '') => {
  try {
    const docId = toDocId(newsletterId);
    const docRef = doc(db, COLLECTION_NAME, docId);
    
    let docSnap;
    try {
      docSnap = await getDoc(docRef);
    } catch (readError) {
      console.warn('Firestore read failed (mungkin offline):', readError.message);
      return { viewCount: 0, lastViewedAt: null };
    }

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        viewCount: increment(1),
        lastViewedAt: new Date().toISOString(),
        ...(title ? { title } : {}),
      });
    } else {
      await setDoc(docRef, {
        newsletterId: newsletterId,
        title: title,
        viewCount: 1,
        firstViewedAt: new Date().toISOString(),
        lastViewedAt: new Date().toISOString(),
      });
    }

    // Return the updated data
    const updatedSnap = await getDoc(docRef);
    return updatedSnap.exists() ? updatedSnap.data() : { viewCount: 1, lastViewedAt: new Date().toISOString() };
  } catch (error) {
    console.warn('Error recording newsletter view:', error.message);
    return { viewCount: 0, lastViewedAt: null };
  }
};

/**
 * Get view count for a specific newsletter
 * @param {string} newsletterId - Unique identifier for the newsletter
 * @returns {Promise<number>} View count
 */
export const getViewCount = async (newsletterId) => {
  try {
    const docId = toDocId(newsletterId);
    const docRef = doc(db, COLLECTION_NAME, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().viewCount || 0;
    }
    return 0;
  } catch (error) {
    console.warn('Error getting view count:', error.message);
    return 0;
  }
};

/**
 * Get view data for a specific newsletter
 * @param {string} newsletterId - Unique identifier for the newsletter
 * @returns {Promise<Object|null>} View data or null
 */
export const getNewsletterViewData = async (newsletterId) => {
  try {
    const docId = toDocId(newsletterId);
    const docRef = doc(db, COLLECTION_NAME, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.warn('Error getting newsletter data:', error.message);
    return null;
  }
};

/**
 * Get all newsletter view stats
 * @returns {Promise<Object>} All newsletter view data keyed by newsletterId
 */
export const getAllNewsletterStats = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const stats = {};
    querySnapshot.forEach((docItem) => {
      const data = docItem.data();
      stats[data.newsletterId] = data;
    });
    return stats;
  } catch (error) {
    console.warn('Error getting all newsletter stats:', error.message);
    return {};
  }
};

/**
 * Get formatted last viewed date
 * @param {string} dateString - ISO date string
 * @returns {string|null} Formatted date string or null
 */
export const formatLastViewedDate = (dateString) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
