import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJtJvPdg9owkQhu99U82r9cE0YaGmcLbo",
  authDomain: "chat-hacker-82e55.firebaseapp.com",
  projectId: "chat-hacker-82e55",
  storageBucket: "chat-hacker-82e55.appspot.com",
  messagingSenderId: "918654199628",
  appId: "1:918654199628:web:8855d7d4c4301da8a191e9",
  measurementId: "G‑6X2W1618S9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };