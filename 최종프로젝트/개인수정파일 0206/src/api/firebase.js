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
  apiKey: "AIzaSyAWMXt-juX5KCNIXU2f412D1hCxxjgJvwA",
  authDomain: "dwfinaltest.firebaseapp.com",
  projectId: "dwfinaltest",
  storageBucket: "dwfinaltest.appspot.com",
  messagingSenderId: "884068624763",
  appId: "1:884068624763:web:7d84e23a22abe7dc0075de",
  measurementId: "G-97TGCTC868",
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

// 스토어 아이템 추가 및 수정(파라미터를 조건으로 해서 state가 있으면 업데이트 없으면 추가하기)
async function addStoreItemData(collectionName, formData, state = null) {
  const time = new Date().getTime(); // ms까지 표시되는 시간
  // 이미지들 배열
  const imgArr = [];
  const uuid = crypto.randomUUID();

  // async function processImage(img, index) {
  //   // console.log(typeof img);
  //   // img(File) 경우
  //   if (typeof img === "object") {
  //     // 기존에 값이 존재할 경우
  //     if (state && state.STORE_IMAGES[index] !== null) {
  //       console.log("기존에 값이 존재할 경우");
  //       console.log(state.STORE_IMAGES[index]);

  //       const prevUrl = decodeURIComponent(state.STORE_IMAGES[index]);
  //       const prevFileName = prevUrl.slice(
  //         prevUrl.lastIndexOf("/") + 1,
  //         prevUrl.indexOf("?")
  //       );
  //       const storage = getStorage();
  //       const desertRef = ref(storage, `store/${prevFileName}`);
  //       deleteObject(desertRef);

  //       const uuid = crypto.randomUUID();
  //       const path = `store/${uuid}`;

  //       // 파일을 저장하고 url을 받아온다.

  //       const imageRef = ref(storage, path);
  //       await uploadBytes(imageRef, img);
  //       const url = await getDownloadURL(imageRef);

  //       // console.log(imageRef);
  //       imgArr.push(url);
  //       // console.log(imgArr);
  //       // console.log(url);
  //     }
  //     // 기존값이 존재하지 않을 경우
  //     else {
  //       console.log("기존값이 존재하지 않을 경우");
  //       const uuid = crypto.randomUUID();
  //       const path = `store/${uuid}`;
  //       const storage = getStorage();
  //       // 파일을 저장하고 url을 받아온다.

  //       const imageRef = ref(storage, path);
  //       await uploadBytes(imageRef, img);
  //       const url = await getDownloadURL(imageRef);

  //       console.log(imageRef);
  //       imgArr.push(url);
  //       console.log(imgArr);
  //       console.log(url);
  //     }
  //   }
  //   // 문자열(기존값유지) 경우
  //   else if (typeof img === "string") {
  //     console.log("문자열(기존값유지) 경우");
  //     imgArr.push(img);
  //   }
  //   // img를 빈값(공란) 경우
  //   else if (img === null) {
  //     console.log("img를 빈값(공란) 경우");
  //     // 기존에 이미지가 있었는데 빈값으로 바꿀경우
  //     if (state.STORE_IMAGES[index] !== null) {
  //       const prevUrl = state.STORE_IMAGES[index];
  //       console.log(prevUrl);
  //       const prevFileName = prevUrl.slice(
  //         prevUrl.lastIndexOf("/") + 1,
  //         prevUrl.indexOf("?")
  //       );
  //       console.log(prevFileName);
  //       const storage = getStorage();
  //       const desertRef = ref(storage, `store/${prevFileName}`);
  //       deleteObject(desertRef);
  //     }
  //   }
  // }

  // 이미지 등록부분
  async function processImage(img, index) {
    // img가 File의 경우(새로운 사진이 등록됨)
    if (typeof img === "object") {
      console.log("img가 File의 경우");
      const uuid = crypto.randomUUID();
      const path = `store/${uuid}`;
      const storage = getStorage();

      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, img);
      const url = await getDownloadURL(imageRef);

      console.log(imageRef);
      imgArr.push(url);
      console.log(imgArr);
      console.log(url);
    }
    // img가 string의 경우(기본의 값을 유지)
    else if (typeof img === "string") {
      console.log("img가 string의 경우");
      imgArr.push(img);
    }
  }

  // 병렬처리는 순서를 보장하지 않는다.
  // // formData.STORE_IMAGES 배열의 각 이미지에 대한 비동기 작업 처리
  // const promiseAddArray = formData.STORE_IMAGES.map(processImage);
  // // Promise.all : 모든 프로미스를 병렬 실행 후 모두 종료 시 반환 함.
  // await Promise.all(promiseAddArray);

  for (const img of formData.STORE_IMAGES) {
    await processImage(img);
  }

  // console.log(imgArr); 잘 나옴

  // 이미지 삭제부분
  async function deleteImage(img, index) {
    const storage = getStorage();
    if (img !== "initialValue" && img !== imgArr[index]) {
      const prevUrl = decodeURIComponent(img);
      console.log(prevUrl);
      const prevFileName = prevUrl.slice(
        prevUrl.lastIndexOf("/") + 1,
        prevUrl.indexOf("?")
      );
      const desertRef = ref(storage, `store/${prevFileName}`);
      //
      try {
        await deleteObject(desertRef);
        console.log(`Image ${prevFileName} deleted successfully.`);
      } catch (error) {
        console.error(`Error deleting image ${prevFileName}:`, error);
      }
    } else {
      console.log("Skipping deletion of initial or previously deleted image.");
    }
  }

  if (state) {
    console.log("이미지 삭제코드 작동");
    // state.STORE_IMAGES 배열의 각 이미지에 대한 비동기 작업 처리
    // const promiseDeleteArray = state?.STORE_IMAGES.map(deleteImage);
    // await Promise.all(promiseDeleteArray);
    await state.STORE_IMAGES.map((img, index) => {
      deleteImage(img, index);
    });
  }

  // 고민의 흔적들
  // for (const img of formData.STORE_IMAGES) {
  //   if (img !== null) {
  //     const uuid = crypto.randomUUID();
  //     const path = `store/${uuid}`;

  //     // 파일을 저장하고 url을 받아온다.
  //     const storage = getStorage();
  //     const imageRef = ref(storage, path);
  //     await uploadBytes(imageRef, img);
  //     const url = await getDownloadURL(imageRef);

  //     console.log(imageRef);
  //     imgArr.push(url);
  //     console.log(imgArr);
  //     console.log(url);
  //   }
  // }

  formData.STORE_IMAGES = imgArr;
  state && state.STORE_DATE
    ? (formData.STORE_DATE = state.STORE_DATE)
    : (formData.STORE_DATE = time);
  formData.STORE_UPDATE = time;

  state && state.STORE_REVIEWS
    ? (formData.STORE_REVIEWS = state.STORE_REVIEWS)
    : (formData.STORE_REVIEWS = formData.STORE_REVIEWS = []);

  formData.STORE_RATING = 0;
  state && state.STORE_ID
    ? (formData.STORE_ID = state.STORE_ID)
    : (formData.STORE_ID = uuid);

  console.log("여기");
  console.log(formData);

  // 추가할 때의 함수와 수정할 떄의 함수(state 유무)
  if (state === null) {
    console.log("!state");
    const result = await addDoc(collection(db, collectionName), formData);
    const docSnap = await getDoc(result);
    console.log(result);
    console.log(docSnap.data());
    return docSnap.data();
  } else if (typeof state === "object") {
    console.log(state);
    const ref = doc(db, "Store", state.STORE_DOCID);

    await updateDoc(ref, formData);
  }
}

// 스토어 아이템 삭제
async function deleteStoreItemData(collectionName, state) {
  const storage = getStorage();
  for (const img of state.STORE_IMAGES) {
    console.log("확인");

    if (img !== "initialValue") {
      const prevUrl = decodeURIComponent(img);
      console.log(prevUrl);
      const prevFileName = prevUrl.slice(
        prevUrl.lastIndexOf("/") + 1,
        prevUrl.indexOf("?")
      );
      console.log(prevFileName);
      const desertRef = ref(storage, `store/${prevFileName}`);
      // 이미지 삭제
      console.log("이미지 삭제");
      await deleteObject(desertRef).catch((error) => {
        console.error("Error deleting image:", error);
      });
    }
  }

  console.log("문서삭제");
  const docRef = doc(db, collectionName, state?.STORE_DOCID);
  await deleteDoc(docRef);
}

// 리스트 가져오기(DOCID를 객체에 추가)
async function getStoreItemDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  // console.log(querySnapshot);

  const result = querySnapshot.docs.map((doc) => ({
    STORE_DOCID: doc.id,
    ...doc.data(),
  }));
  return result;
}
// 아이템 가져오기
async function getStoreItemData(collectionName, docId) {
  console.log(collectionName);
  console.log(docId);
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
  if (docSnap.exists()) {
    console.log(docSnap.data());
  }
  return docSnap.data();
}

// 리뷰작성
async function addStoreItemReviewData(collectionName, docId, review, item) {
  console.log(collectionName);
  // console.log(docId);
  // console.log(review);
  // console.log(item.STORE_REVIEWS);

  // 기존 리뷰 배열에 구조분해로 삽입
  const newArr = [...item.STORE_REVIEWS, review];
  console.log(newArr);

  const q = query(
    collection(db, collectionName),
    where("STORE_ID", "==", item.STORE_ID)
  );

  // console.log(q);

  const querySnapshot = await getDocs(q);

  console.log(querySnapshot);
  console.log(querySnapshot.docs);
  console.log(querySnapshot.docs[0].id);

  // 쿼리해서 docId를 찾을 수 있다.
  const docRef = doc(db, collectionName, querySnapshot.docs[0].id);
  // console.log(docRef);

  // console.log(querySnapshot.docs[0].data());

  // 리뷰를 이미 작성했는데 필터하는 부분
  const isIdExsist = querySnapshot.docs[0]
    .data()
    .STORE_REVIEWS.some((el) => el.MEN === review.MEN);
  console.log(isIdExsist);

  if (!isIdExsist) {
    try {
      await updateDoc(docRef, {
        STORE_REVIEWS: arrayUnion(review),
      });
      return newArr;
    } catch (error) {
      alert(error);
    }
  } else {
    alert("이미 리뷰를 작성하셨어요!!!");
  }
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
  getStoreItemDatas,
  getStoreItemData,
  addStoreItemReviewData,
  deleteStoreItemData,
};
