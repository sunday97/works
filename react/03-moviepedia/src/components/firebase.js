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
  exists,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

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
  // 스프레드 경우
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // 스프레드 x 경우
  // const reviews = result.map((doc) => {
  //   const obj = doc.data();
  //   obj.docId = doc.id;
  //   return obj;
  // });
  // for문을 쓸 경우...
  // const tempArr = [];
  // for (let i = 0; i < result.length - 1; i++) {
  //   const obj = result[i].data();
  //   obj.docId = result[i].id;
  //   tempArr.push(obj);
  // }

  //   console.log(reviews);
  // const obj = {
  //   reviews: reviews,
  // };
  // console.log(obj);
  // console.log(reviews);

  // return은 하나의 형식의 하나만 보낼 수 있다..... 여러개를 리턴하기 위해서는 {}로 묶어서 보내든가.
  return { reviews, lastQuery };
}

async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

// firebase-firestore엔 file 객체가 들어갈 수 없어서 firebase-storage를 생성해서 파일을 그쪽에 저장해서 그쪽에서 hppts를 받아서 저장해야 한다.
async function addDatas(collectionName, formData) {
  // crypto.randomUUID() => 범용 고유 식별자(Universally Unique IDentifier)를 만드는 함수...128자...
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime(); // ms까지 표시되는 시간
  // 파일을 저장하고 url을 받아온다.
  const url = await uploadImage(path, formData.imgUrl);

  // formData에 새로운 정보 적용
  formData.id = lastId;
  formData.createdAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;

  // 문서 저장
  const result = await addDoc(collection(db, collectionName), formData); // addDoc은 문서 아이디를 반환해주지만(아이디를 생성하니까) , setDoc은 반환 안해준다(사용할 때 알아야 하니까).
  // console.log(result);
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function uploadImage(path, imgFile) {
  // const imageRef = ref(storage, "movie/fileName");
  // await uploadBytes(imageRef, 저장할파일객체)
  const storage = getStorage();
  const imageRef = ref(storage, path);

  //  File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  //  저장한 file의 url 을 받아온다.
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName) {
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  getDoc,
  addDatas,
  deleteDatas,
};
