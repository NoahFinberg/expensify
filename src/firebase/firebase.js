import { initializeApp } from "firebase/app";
import * as firebase from "firebase/database";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
  onValue,
} from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  firebase,
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
  onValue,
  collection,
  getDocs,
  provider,
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  db as default,
};

// onValue(
//   ref(db),
//   (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val);
//   },
//   {
//     onlyOnce: true,
//   }
// );

// set(ref(db), {
//   name: "Noah Finberg",
//   age: 28,
//   isEmployed: true,
//   location: {
//     city: "Portland",
//     state: "Maine",
//   },
// })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//   });

// update(ref(db), {
//   age: 24,
//   "location/city": "Boston",
// })
//   .then(() => {
//     console.log("data is updated");
//   })
//   .catch(() => {
//     console.log("Error: ", e);
//   });

// update(ref(db, "location"), {
//   country: "United States",
//   state: "Massachusettes",
// })
//   .then(() => {
//     console.log("data is updated");
//   })
//   .catch(() => {
//     console.log("Error: ", e);
//   });

// remove(ref(db, "isEmployed"))
//   .then(() => {
//     console.log("data is deleted");
//   })
//   .catch(() => {
//     console.log("Error: ", e);
//   });
