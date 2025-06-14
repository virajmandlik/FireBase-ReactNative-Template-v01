# 🔥 Expo Firebase Starter

A minimal Expo + Firebase Auth starter with Email/Password login.

## 🚀 Features

* ✅ Email/Password Auth (Login, Signup, Reset)
* 🔐 Firebase v10
* 📱 Cross-platform (iOS, Android, Web)
* 🧭 React Navigation 6
* ✅ Form validation (Formik + Yup)
* ⚙️ Environment variables via `.env`

## 📦 Quick Setup

### 1. Clone & Install

```bash
git clone <repo-url>
cd expo-firebase-starter
npm install
```

### 2. Firebase Setup

* Go to [Firebase Console](https://console.firebase.google.com/)
* Enable **Email/Password Auth**
* Add config to `.env`:

```env
API_KEY=your_api_key
AUTH_DOMAIN=your_project.firebaseapp.com
PROJECT_ID=your_project_id
STORAGE_BUCKET=your_project.appspot.com
MESSAGING_SENDER_ID=your_sender_id
APP_ID=your_app_id
```

### 3. Start App

```bash
npx expo start
```

## 📁 Structure

```
components/      # UI components
config/          # Firebase & theme
screens/         # Auth & Home screens
navigation/      # Auth/App stacks
providers/       # User context
App.js           # App entry
```

## 🔧 Scripts

```bash
npm start      # Expo dev server
npm run ios    # iOS simulator
npm run android# Android emulator
npm run web    # Web browser
```

## 🛠 Stack

* Expo SDK 50
* Firebase Auth
* React Navigation
* Formik + Yup
* React Native + Context API

---

