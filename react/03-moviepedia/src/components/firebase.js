// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// cloud Firestore import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js" 에서 주소를 떠서 아래에 붙여넣고 import {} 안에 getFirestore 추가해줬다.
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

const firebaseConfig = {
  apiKey: "AIzaSyC4DwPcQx53IPPmmPKk8AElHdJRQYNOZes",
  authDomain: "project0304-6f178.firebaseapp.com",
  projectId: "project0304-6f178",
  storageBucket: "project0304-6f178.appspot.com",
  messagingSenderId: "138504060954",
  appId: "1:138504060954:web:dc04e1405d4f9c45e711a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  //   console.log(querySnapshot.docs);
  //   console.log(querySnapshot.docs[0]);
  //   console.log(querySnapshot.docs[0].data());
  //   const result = querySnapshot.getDocs.map((doc) => doc.data());
  const result = querySnapshot.docs;
  const reviews = result.map((doc) => doc.data());
  //   console.log(reviews);
  return reviews;
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteField,
  getDoc,
};
