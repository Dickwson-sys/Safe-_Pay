import { getAnalytics } from 'firebase/analytics'; // Add Analytics (if needed)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Add Firestore
import { getStorage } from 'firebase/storage'; // Add Storage

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL7IlxYBDtNxE8NIgSiaTxqCs9NZnJFZk", // Fix typo in "AIza"
    authDomain: "mypage-90be4.firebaseapp.com",        // Corrected from "nypage"
    databaseURL: "https://mypage-90be4-default-rtdb.firebaseio.com", // Corrected
    projectId: "mypage-90be4",                         // Corrected from "nypage"
    storageBucket: "mypage-90be4.appspot.com",         // Fixed format
    messagingSenderId: "887145124191",                 // Fixed typo
    appId: "1:887145124191:web:860a6e3cc2eaaf6f8ce6ea", // Fixed format
    measurementId: "G-Y9M15544N0"                      // Fixed typo
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);          // Authentication
export const db = getFirestore(app);       // Firestore Database
export const storage = getStorage(app);    // Cloud Storage
export const analytics = getAnalytics(app);// Analytics (optional)

// Optional: Add other Firebase services as needed
// import { getFunctions } from 'firebase/functions';
// export const functions = getFunctions(app);