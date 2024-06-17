import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBav-zU4KNPVGWNWsvXqWmHDdyzDrYP4BY",
  authDomain: "netflix-clone-3675d.firebaseapp.com",
  projectId: "netflix-clone-3675d",
  storageBucket: "netflix-clone-3675d.appspot.com",
  messagingSenderId: "991380701999",
  appId: "1:991380701999:web:b91374d36860a6164257da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
