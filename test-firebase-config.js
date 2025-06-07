// Test Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your Firebase config from .env
const firebaseConfig = {
  apiKey: "AIzaSyAlofcA_L6MWK1LxV2SATVaMRBc2xJ96ls",
  authDomain: "fir-a57de.firebaseapp.com",
  projectId: "fir-a57de",
  storageBucket: "fir-a57de.firebasestorage.app",
  messagingSenderId: "605942728747",
  appId: "1:605942728747:web:dc83e31642db068a33026e"
};

console.log("Testing Firebase Configuration...");
console.log("Config:", firebaseConfig);

try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("✅ Firebase app initialized successfully");
  
  // Initialize Auth
  const auth = getAuth(app);
  console.log("✅ Firebase Auth initialized successfully");
  console.log("Auth instance:", auth);
  
} catch (error) {
  console.error("❌ Firebase initialization failed:", error);
  console.error("Error code:", error.code);
  console.error("Error message:", error.message);
}