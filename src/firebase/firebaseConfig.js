// Firebase Configuration for IYSA Newsletter View Tracking
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkzeK5lU8G7HkGRj19me46TEDRi3m9FaU",
  authDomain: "viewers-newsletter.firebaseapp.com",
  projectId: "viewers-newsletter",
  storageBucket: "viewers-newsletter.firebasestorage.app",
  messagingSenderId: "740461450645",
  appId: "1:740461450645:web:775e914018f831bd30d29c",
  measurementId: "G-C19Q5PT57M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
export default app;
