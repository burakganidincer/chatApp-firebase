import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3rjXWzhrzQd4O4_Vp98iBbE5btHRhtwk",
  authDomain: "chat-40d70.firebaseapp.com",
  projectId: "chat-40d70",
  storageBucket: "chat-40d70.appspot.com",
  messagingSenderId: "358156232194",
  appId: "1:358156232194:web:e86370fe080d923953691b",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurlumunu yap
export const provider = new GoogleAuthProvider();

// veritabanı hizemetinin referansını al
export const db = getFirestore(app);
