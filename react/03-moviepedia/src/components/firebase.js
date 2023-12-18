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
  getDoc,
  query,
  orderBy,
  limit,
  startAfter,
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

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니라 기능입니다.");
  // console.error;
  // const querySnapshot = await getDocs(collection(db, collectionName));
  // 최초에는 lq가 undefined 나온다. 그걸 이용해 함수 기능을 나눈다.
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
    );
  }

  // asc(Ascending,기본값,생략가능) : 오름차순 , desc(Descending) : 내림차순
  // 쿼리 query
  // orderBy, limit, startAfter
  const querySnapshot = await getDocs(docQuery);

  //   console.log(querySnapshot.docs);
  //   console.log(querySnapshot.docs[0]);
  //   console.log(querySnapshot.docs[0].data());
  //   const result = querySnapshot.getDocs.map((doc) => doc.data());
  const result = querySnapshot.docs;
  // console.log(result);
  const lastQuery = result[result.length - 1]; // 마지막 요소를 기억
  // console.log(lastQuery);
  const reviews = result.map((doc) => doc.data());
  //   console.log(reviews);
  // const obj = {
  //   reviews: reviews,
  // };
  // console.log(obj);
  // console.log(reviews);

  // return은 하나의 형식의 하나만 보낼 수 있다..... 여러개를 리턴하기 위해서는 {}로 묶어서 보내든가.
  return { reviews, lastQuery };
}

export { db, getDocs, collection, getDatas, setDoc, addDoc, doc, getDoc };
