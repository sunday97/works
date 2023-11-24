import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyAXN7xYmB78vz3iKk2DeB6UcAOafKp1jGg",
  authDomain: "test-231120.firebaseapp.com",
  projectId: "test-231120",
  storageBucket: "test-231120.appspot.com",
  messagingSenderId: "130174858623",
  appId: "1:130174858623:web:a17f011865df61c162564a",
  measurementId: "G-BP9G7P8JER",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ----------

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

export {
  db,
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
  getDoc,
  getDatas,
};
