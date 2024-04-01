import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCqyhjAzmwTzSoPMk8NCkSOps_Gu7eM7_Y",
//   authDomain: "netflixclone-af56a.firebaseapp.com",
//   projectId: "netflixclone-af56a",
//   storageBucket: "netflixclone-af56a.appspot.com",
//   messagingSenderId: "1077389074595",
//   appId: "1:1077389074595:web:4aed570b4f13d8629e9f16",
//   measurementId: "G-YV9VR6HZSR",
// };

// const app = initializeApp(firebaseConfig);
// // to initialize auth and database
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();


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