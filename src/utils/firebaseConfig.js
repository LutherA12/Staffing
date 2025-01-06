import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const enviroVar = import.meta.env;

const firebaseConfig = {
  apiKey: enviroVar.VITE_FIREBASE_API_KEY,
  authDomain: enviroVar.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: enviroVar.VITE_FIREBASE_PROJECT_ID,
  storageBucket: enviroVar.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: enviroVar.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: enviroVar.VITE_FIREBASE_APP_ID,
  measurementId: enviroVar.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig, app, analytics };
