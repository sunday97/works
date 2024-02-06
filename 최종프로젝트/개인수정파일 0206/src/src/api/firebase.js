import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  exists,
  where,
  arrayUnion,
  arrayRemove,
  increment,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  // 아래 안되면 위에거로
  // apiKey: "AIzaSyDVWZ9ODiEMQRN8FWOBV8vHR2lqmX2p6kI",
  // authDomain: "buddiz-72571.firebaseapp.com",
  // projectId: "buddiz-72571",
  // storageBucket: "buddiz-72571.appspot.com",
  // messagingSenderId: "143210608224",
  // appId: "1:143210608224:web:2f9e32fa243cbfa2d47505",

  // 위에 안되면 이거로 다시
  apiKey: "AIzaSyCJDkOrv7ZDSkqxHXknfxRf7G14LYnaizM",
  authDomain: "buddiz2.firebaseapp.com",
  projectId: "buddiz2",
  storageBucket: "buddiz2.appspot.com",
  messagingSenderId: "1011707955672",
  appId: "1:1011707955672:web:c4fa09880e47738cc10aad"
};
const { v4: uuidv4 } = require("uuid");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 최종프로젝트 아래사용 파이어베이스 --------------------------------------------------------------------------------------

// 데이터 가져오는 함수
async function getAddress(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));
  return result;
}

// 데이터 수정하는 함수
async function updateData(collectionName, docId, formData) {
  const docRef = doc(db, collectionName, docId);
  const update = await updateDoc(docRef, formData);

  console.log(update);
  return update;
}

// 비밀번호 변경할때 비밀번호 체크
async function pwCheckUpdate(collectionName, changePw) {
  const data = query(
    collection(db, collectionName).where("MEM_PASSWORD", "==", changePw)
  );
  const querySnapshot = await getDocs(data);
  if (querySnapshot.exists()) {
    const reviews = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return reviews;
  }
}

// 이메일 찾기
async function findEmail(collectionName, find1, find2) {
  const docQuery = query(
    collection(db, collectionName),
    where("BOARD_NAME", "==", find1),
    where("BOARD_PHONE", "==", find2)
  );
  const querySnapshot = await getDoc(docQuery);
  if (querySnapshot.exists()) {
    const review = { docId: querySnapshot[0].id, ...querySnapshot[0].data() };
    return review;
  }
}

async function findPassword(collectionName, find1, find2, find3) {
  const docQuery = query(
    collection(db, collectionName),
    where("MEM", "==", find1),
    where("MEM_NAME", "==", find2),
    where("MEM_PHONE", "==", find3)
  );
  const querySnapshot = await getDoc(docQuery);
  if (querySnapshot.exists()) {
    const review = { docId: querySnapshot[0].id, ...querySnapshot[0].data() };
    return review;
  }
}

// 데이터 추가하고 가져오는 함수
async function addData(collectionName, formData) {
  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function nicknameComparison(collectionName, nickname, phone) {
  let docQuery;

  if (nickname) {
    docQuery = query(
      collection(db, collectionName),
      where("MEM_NICKNAME", "==", nickname)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      where("MEM_PHONE", "==", phone)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  const result = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));
  return result;
}

// 게시판 nav바 메뉴 눌렀을때 데이터 가져오는 함수
async function getBoardData(collectionName, number, count) {
  if (number == "000") {
    const docQuery = query(
      collection(db, collectionName),
      orderBy(count, "desc")
    );
    const querySnapshot = await getDocs(docQuery);
    const result = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return result;
  } else {
    const docQuery = query(
      collection(db, collectionName),
      where("BOARD_CODE", "==", number),
      orderBy(count, "desc")
    );
    const querySnapshot = await getDocs(docQuery);
    const result = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return result;
  }
}

// 게시판 리스트 한개 눌렀을때 가져오는 함수
async function getBoardContentData(collection, docId) {
  try {
    const item = doc(db, collection, String(docId));
    const data = await getDoc(item);
    // Check if the document exists
    if (data.exists()) {
      return { docId: data.id, ...data.data() };
    } else {
      console.error("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling, if needed
  }
}

// Board 컬렉션에 review 배열에 값 추가
async function addReview(collectionName, docId, newReview, name) {
  const uuid = uuidv4(); // uuidv4 함수를 사용하여 UUID 생성
  const docRef = doc(db, collectionName, docId);
  try {
    // Board 문서 업데이트
    await updateDoc(docRef, {
      BOARD_REVIEW: arrayUnion({
        REVIEW_ID: uuid,
        REVIEW_CONTENT: newReview,
        REVIEW_USERNAME: name,
        REVIEW_REPLY: [], // 초기에 댓글의 대댓글은 빈 배열로 시작
      }),
    });
    console.log("Review added to Board:", newReview);
  } catch (error) {
    console.error("Error adding review:", error);
  }
}

// Board 컬렉션에 대댓글 추가
async function addReply(collectionName, docId, reviewId, newReply, name) {
  const id = uuidv4(); // uuidv4 함수를 사용하여 UUID 생성
  try {
    const docRef = doc(db, collectionName, docId);
    // 해당 리뷰 객체가 있는지 확인
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const boardReview = docSnapshot.data().BOARD_REVIEW;

      const updatedBoardReview = boardReview.map((review) => {
        if (review.REVIEW_ID === reviewId) {
          // REVIEW_REPLY 필드를 배열로 초기화
          review.REVIEW_REPLY = review.REVIEW_REPLY || [];

          // REVIEW_REPLY 필드에 새로운 대댓글 추가
          review.REVIEW_REPLY.push({
            REPLY_USERNAME: name,
            REPLY_CONTENT: newReply,
            REPLY_ID: id,
          });

          return review;
        }
        return review;
      });

      console.log(updatedBoardReview);

      // 해당 리뷰의 BOARD_REVIEW 필드 업데이트
      const arrayUpdate = await updateDoc(docRef, {
        BOARD_REVIEW: updatedBoardReview,
      });
    } else {
      console.error("Review does not exist");
    }
  } catch (error) {
    console.error("Error adding reply:", error);
  }
}

// 추천 비추천 수정
async function updateView(collectionName, docId, data) {
  const docRef = doc(db, collectionName, docId);
  const suggestion = await updateDoc(docRef, data);
  return suggestion;
}

// 이미지 추가 함수
async function uploadImage(imgFile) {
  const uuid = crypto.randomUUID();

  // 경로 Board 이름 바꿔야할수도있음 ------------------------------------------------------------------------------------------------------
  const path = `Board/${uuid}`;
  // Firebase Storage를 사용하기 위해 스토리지 인스턴스를 생성합니다.
  // 인스턴스를 반환합니다.
  const storage = getStorage();
  // 스토리지 인스턴스와 이미지의 경로를 사용하여 이미지에 대한 참조(Reference)를 생성합니다.
  const imageRef = ref(storage, path);

  // File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File의 url 을 받아온다.
  const url = await getDownloadURL(imageRef);
  return url;
}

// 게시판 리스트 삭제기능
async function deleteDatas(collectionName, docId) {
  try {
    const rm = await deleteDoc(doc(db, collectionName, docId));
    return true;
  } catch (error) {
    console.error("Error deleting document:", error);
    return false;
  }
}

export {
  // 여기 아래가 프로젝트때 쓰는코드
  // updateView,
  // updateBoardView,
  getAddress,
  addData,
  nicknameComparison,
  getBoardData,
  getBoardContentData,
  uploadImage,
  // getReview,
  addReview,
  deleteDatas,
  serverTimestamp,
  addReply,
  updateData,
  findEmail,
  pwCheckUpdate,
  updateView,
  increment,
  findPassword,
};
