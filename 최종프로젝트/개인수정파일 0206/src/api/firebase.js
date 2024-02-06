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
  appId: "1:1011707955672:web:c4fa09880e47738cc10aad",
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

// 관리자 데이터 가져오는 함수
async function getManager(collectionName) {
  const docRef = doc(db, collectionName, "myKd0tZ4VBpM7scVHsg3");
  const docSnapshot = await getDoc(docRef);
  console.log(docRef);
  console.log(docSnapshot);

  if (docSnapshot.exists) {
    const review = { docId: docSnapshot.id, ...docSnapshot.data() };
    console.log(review);
    return { review };
  }
}

// 데이터 수정하는 함수 / 추천, 비추천
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
    where("MEM_NAME", "==", find1),
    where("MEM_PHONE", "==", find2)
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

// 데이터 추가하고 가져오는 함수 / 신고
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

// 댓글 수정
async function updateReview(collectionName, docId, reviewId, data) {
  const docRef = doc(db, collectionName, docId);
  // 해당 보드 문서 가져오기
  const Snapshot = await getDoc(docRef);
  if (Snapshot.exists()) {
    // BOARD_REVIEW 배열 가져오기
    const boardReviewArray = Snapshot.data().BOARD_REVIEW || [];

    // 댓글 업데이트
    const updateData = boardReviewArray.map((comment) => {
      if (comment.REVIEW_ID === reviewId) {
        return { ...comment, REVIEW_CONTENT: data };
      }
      return comment;
    });
    // 보드 문서 업데이트
    await updateDoc(docRef, {
      BOARD_REVIEW: updateData,
    });
  }
}

// 댓글 삭제
async function deleteReview(collectionName, docId, reviewId) {
  const docRef = doc(db, collectionName, docId);

  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const boardReviewArray = docSnapshot.data().BOARD_REVIEW || [];

      // REVIEW_ID가 reviewId와 일치하지 않는 객체들로 이루어진 새로운 배열 생성
      const updatedBoardReviewArray = boardReviewArray.filter(
        (review) => review.REVIEW_ID !== reviewId
      );

      // 보드 문서 업데이트
      await updateDoc(docRef, {
        BOARD_REVIEW: updatedBoardReviewArray,
      });

      return true;
    }
  } catch (error) {
    console.error("Error deleting review:", error);
    return false;
  }
}

// 대댓글(REVIEW_REPLY) 수정
async function updateReply(collectionName, docId, reviewId, replyId, data) {
  const docRef = doc(db, collectionName, docId);
  const Snapshot = await getDoc(docRef);

  if (Snapshot.exists()) {
    const boardReviewArray = Snapshot.data().BOARD_REVIEW || [];

    // 댓글(REVIEW) 배열 수정
    const updatedReviewArray = boardReviewArray.map((review) => {
      if (review.REVIEW_ID === reviewId) {
        // REVIEW_REPLY 배열 수정
        const updatedReplyArray = review.REVIEW_REPLY.map((reply) => {
          if (reply.REPLY_ID === replyId) {
            // 원하는 조건으로 수정
            return { ...reply, REPLY_CONTENT: data };
          }
          return reply;
        });

        // 해당 REVIEW 수정
        return { ...review, REVIEW_REPLY: updatedReplyArray };
      }
      return review;
    });

    // 보드 문서 업데이트
    await updateDoc(docRef, {
      BOARD_REVIEW: updatedReviewArray,
    });
    return true;
  }
}

// 대댓글(REVIEW_REPLY) 삭제
async function deleteReply(collectionName, docId, reviewId, replyId) {
  console.log(reviewId, replyId);
  const docRef = doc(db, collectionName, docId);
  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const boardReviewArray = docSnapshot.data().BOARD_REVIEW || [];

      // REVIEW_ID가 reviewId와 일치하는 객체 찾기
      const reviewToUpdate = boardReviewArray.find(
        (review) => review.REVIEW_ID === reviewId
      );

      if (reviewToUpdate) {
        // REVIEW_REPLY 배열에서 replyId가 일치하는 대댓글 제외
        const updatedReplyArray = reviewToUpdate.REVIEW_REPLY.filter(
          (reply) => reply.REPLY_ID !== replyId
        );

        // REVIEW_REPLY를 제외한 나머지 속성들은 그대로 유지
        const updatedReviewToUpdate = {
          ...reviewToUpdate,
          REVIEW_REPLY: updatedReplyArray,
        };

        // 새로운 BOARD_REVIEW 배열 생성 (기존 REVIEW_ID에 해당하는 객체를 업데이트)
        const updatedBoardReviewArray = boardReviewArray.map((review) =>
          review.REVIEW_ID === reviewId ? updatedReviewToUpdate : review
        );

        // 보드 문서 업데이트
        await updateDoc(docRef, {
          BOARD_REVIEW: updatedBoardReviewArray,
        });

        return true;
      } else {
        console.error("해당 REVIEW_ID를 찾을 수 없습니다.");
        return false;
      }
    } else {
      console.error("보드 문서가 존재하지 않습니다.");
      return false;
    }
  } catch (error) {
    console.error("Error deleting reply:", error);
    return false;
  }
}

// 이미지 추가 함수
async function uploadImage(imgFile) {
  console.log(imgFile);
  const id = uuidv4(); // uuidv4 함수를 사용하여 UUID 생성

  // 경로 Board 이름 바꿔야할수도있음 ------------------------------------------------------------------------------------------------------
  const path = `Board/${id}`;
  console.log(path);
  // Firebase Storage를 사용하기 위해 스토리지 인스턴스를 생성합니다.
  // 인스턴스를 반환합니다.
  const storage = getStorage();
  // 스토리지 인스턴스와 이미지의 경로를 사용하여 이미지에 대한 참조(Reference)를 생성합니다.
  const imageRef = ref(storage, path);
  console.log(imageRef);
  // File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File의 url 을 받아온다.
  const url = await getDownloadURL(imageRef);
  // console.log(url);
  return url;
}

async function deleteImage(img) {
  const storage = getStorage();
  const deleteRef = ref(storage, img);
  await deleteObject(deleteRef);
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

// 스토어 관련 함수들
// 스토어 관련 함수들
// 스토어 관련 함수들

// 스토어 아이템 업로드
async function addStoreItemData(collectionName, formData) {
  const time = new Date().getTime(); // ms까지 표시되는 시간
  // 이미지들 배열
  const imgArr = [];
  const uuid = crypto.randomUUID();
  for (const img of formData.STORE_IMAGES) {
    const uuid = crypto.randomUUID();
    const path = `store/${uuid}`;

    // 파일을 저장하고 url을 받아온다.
    const storage = getStorage();
    const imageRef = ref(storage, path);
    await uploadBytes(imageRef, img);
    const url = await getDownloadURL(imageRef);

    console.log(imageRef);
    imgArr.push(url);
    console.log(imgArr);
    console.log(url);
  }

  formData.STORE_IMAGES = imgArr;
  formData.STORE_DATE = time;
  formData.STORE_UPDATE = time;
  formData.STORE_REVIEWS = [];
  formData.STORE_RATING = 0;
  formData.STORE_ID = uuid;

  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  console.log(result);
  console.log(docSnap.data());

  return docSnap.data();
}

// 가져오기(DOCID 객체에 추가)
async function getStoreItemData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  // console.log(querySnapshot);

  const result = querySnapshot.docs.map((doc) => ({
    DOCID: doc.id,
    ...doc.data(),
  }));
  return result;
}

// 댓글작성
async function addStoreItemReviewData(collectionName, docId, reviews) {
  const docRef = doc(db, collectionName, docId);

  await updateDoc(docRef, reviews);
}

export {
  getAddress,
  addData,
  nicknameComparison,
  getBoardData,
  getBoardContentData,
  uploadImage,
  addReview,
  deleteDatas,
  serverTimestamp,
  addReply,
  updateData,
  findEmail,
  pwCheckUpdate,
  increment,
  findPassword,
  updateReview,
  deleteReview,
  deleteImage,
  getStorage,
  updateReply,
  deleteReply,
  getManager,
  addStoreItemData,
  getStoreItemData,
};
