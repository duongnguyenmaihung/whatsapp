// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaeDZunNXDWFcLdPwc1F3-ekC8IGN0mtM",
  authDomain: "whatsapp-d24b1.firebaseapp.com",
  projectId: "whatsapp-d24b1",
  storageBucket: "whatsapp-d24b1.appspot.com",
  messagingSenderId: "338243064479",
  appId: "1:338243064479:web:870eaf4e363f8c981588aa",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
