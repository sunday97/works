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
  where,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXN7xYmB78vz3iKk2DeB6UcAOafKp1jGg",
  authDomain: "test-231120.firebaseapp.com",
  projectId: "test-231120",
  storageBucket: "test-231120.appspot.com",
  messagingSenderId: "130174858623",
  appId: "1:130174858623:web:a17f011865df61c162564a",
  measurementId: "G-BP9G7P8JER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// 공통부분을 뜯어서 관리한다. 많은 연습 필요 => 중복코드 방지 => 유지보수용의 => 성능 업 => 야근 줄어듬 ㅋ

async function getDatasLogin(collectionName, logInput) {
  const querySnapshot = await getDocs(
    collection(db, collectionName),
    where("id", "==", logInput)
    // 서버와 대조하여 맞는 값만 가져온다.
    // where("user_id", "==", value)
  );
  return querySnapshot;
}

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

async function addDatas(collectionName, dataObj) {
  //   await setDoc(doc(db, "member", "nowirteisauto"), {}); 파라미터 없이 {}로 직접 쓸 수도 있음,
  //   문서 ID 부여
  //   await setDoc(doc(db, "member", "nowirteisauto"), dataObj);
  //   문서 ID 랜덤자동
  await addDoc(collection(db, collectionName), dataObj);
}

async function deletedatas(collection, docId) {
  // await deleteDoc(doc(db."컬랙션명","문서ID"))
  await deleteDoc(doc(db, collection, docId));
}

async function updatedatas(collectionName, docId, updateInfoObj) {
  // 문서 필드 데이터 수정
  // await updateDoc(수정할 문서 ref, 수정할정보를 객체형식으로)
  const docRef = doc(db, collectionName, docId);
  const docData = await getDoc(docRef);
  console.log(docData);
  debugger;
  await updateDoc(docRef, updateInfoObj);
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deletedatas,
  updateDoc,
  deleteField,
  updatedatas,
  getDoc,
  where,
  getDatasLogin,
};
