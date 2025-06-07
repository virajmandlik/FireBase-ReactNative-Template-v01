import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Constants from "expo-constants";

console.log("=== Firebase Auth Debug ===");

// Check if Constants are loading properly
console.log("Constants.expoConfig:", Constants.expoConfig);
console.log("Constants.expoConfig.extra:", Constants.expoConfig?.extra);

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};

console.log("Firebase Config:", firebaseConfig);

// Check for undefined values
Object.keys(firebaseConfig).forEach(key => {
  if (!firebaseConfig[key]) {
    console.error(`❌ Missing config value for: ${key}`);
  } else {
    console.log(`✅ ${key}: ${firebaseConfig[key]}`);
  }
});

try {
  const app = initializeApp(firebaseConfig);
  console.log("✅ Firebase app initialized");
  
  const auth = getAuth(app);
  console.log("✅ Auth instance created");
  console.log("Auth config:", auth.config);
  
  // Test a simple auth operation
  console.log("Testing createUserWithEmailAndPassword...");
  createUserWithEmailAndPassword(auth, "test@example.com", "password123")
    .then(() => {
      console.log("✅ Auth test successful");
    })
    .catch((error) => {
      console.error("❌ Auth test failed:");
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Full error:", error);
    });
    
} catch (error) {
  console.error("❌ Firebase initialization failed:", error);
}

export default firebaseConfig;