// import 부분
import * as firebase from "./firebass.js";
const {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  getDoc,
  doc,
  addDatas,
  deletedatas,
  updateDoc,
  deleteField,
  updatedatas,
  query,
  where,
} = firebase;

// Global variable

const idSearchNameInput = document.querySelector(".id-search #user-name");
const idSearchEmailInput = document.querySelector(".id-search #user-email");
const idSearchTelInput = document.querySelector(".id-search #user-tel");
const idSearchForEmailBtn = document.querySelector(".id-search-for-email-btn");
const idSearchForTelBtn = document.querySelector(".id-search-for-tel-btn");

const pwSearchIdInput = document.querySelector(".pw-serch #user-id");
const pwSearchEmailInput = document.querySelector(".pw-serch #user-email");
const pwSearchTelInput = document.querySelector(".pw-serch #user-tel");
const pwSearchBtn = document.querySelector(".pw-search-btn");

const overlay = document.querySelector(".overlay");
const changePwInput = document.querySelector("#changePw");
const changeBtnInfo = document.querySelector(".changeBtnInfo");
const modalChangeBtn = document.querySelector(".changeBtn");
// console.log(modalChangeBtn);

// 비밀번호 변경을 위한 구간
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
// 영대소문자,특수문자(!@#$%^*+=-),숫자(0-9)의 조합인데 8이상 15이하
function isVaildPw(pw) {
  pw.addEventListener("keyup", function () {
    if (pw.value.length == 0) {
      changeBtnInfo.style.color = "red";
      changeBtnInfo.innerHTML = "";
    } else if (pwCheck.test(pw.value)) {
      changeBtnInfo.style.color = "green";
      changeBtnInfo.innerHTML = "사용가능한 비밀번호 입니다:)";
    } else {
      changeBtnInfo.style.color = "red";
      changeBtnInfo.innerHTML = "잘못된 형식입니다:(";
    }
  });
}
isVaildPw(changePwInput);

async function showIdByNameAndEamil(Name, Email) {
  const snapshot = await getDatas("user");
  const arr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    arr.push({ id: id, pw: password, name: name, tel: tel, email: email });
  });
  console.log(arr);
  console.log(arr.find((obj) => obj.name == Name.value));
  console.log(arr.find((obj) => obj.email == Email.value));
  console.log(arr.find((obj) => obj.email == Email.value)["id"]);

  if (arr.includes(Name.value) === arr.includes(Email.value)) {
    if (
      (arr.find((obj) => obj.name === Name.value) ==
        arr.find((obj) => obj.email === Email.value)) ===
      true
    ) {
      alert(
        `아이디는 ${arr.find((obj) => obj.name === Name.value).id} 입니다.`
      );
    } else {
      alert("틀린 이름 혹은 이메일입니다.");
    }
  } else {
    alert("틀린 이름 혹은 이메일입니다.");
  }
}

async function showIdByNameAndTel(Name, Email) {
  const snapshot = await getDatas("user");
  const arr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    arr.push({ id: id, pw: password, name: name, tel: tel, email: email });
  });
  console.log(arr);
  console.log(arr.find((obj) => obj.name === Name.value));
  console.log(arr.find((obj) => obj.tel == Email.value));
  console.log(arr.find((obj) => obj.tel == Email.value)["id"]);

  if (
    (arr.find((obj) => obj.name === Name.value) ==
      arr.find((obj) => obj.tel === Email.value)) ===
    true
  ) {
    alert(`아이디는 ${arr.find((obj) => obj.name === Name.value).id} 입니다.`);
  } else {
    alert("틀린 이름 혹은 이메일입니다.");
  }
}

async function showPwChange(ID, EMAIL, TEL) {
  const snapshot = await getDatas("user");
  const arr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    arr.push({ id: id, pw: password, name: name, tel: tel, email: email });
  });
  console.log(arr);

  // console.log(arr.find((e) => e.id == ID.value));
  console.log(arr.find((obj) => obj.id === ID.value));
  console.log(arr.find((obj) => obj.email === EMAIL.value));
  console.log(arr.find((obj) => obj.tel === TEL.value));

  if (
    (arr.find((obj) => obj.id === ID.value) != undefined,
    arr.find((obj) => obj.email === EMAIL.value) != undefined,
    arr.find((obj) => obj.tel === TEL.value) != undefined)
  ) {
    if (
      (arr.find((obj) => obj.id === ID.value) ===
        arr.find((obj) => obj.email === EMAIL.value),
      arr.find((obj) => obj.id === ID.value)) ===
      arr.find((obj) => obj.tel === TEL.value)
    ) {
      overlay.classList.add("active");
    } else {
      console.log("잘못된 입력입니다.");
    }
  } else {
    console.log("잘못된 입력입니다.");
  }
}

async function changePw(collectionName, userId) {
  // 문서아이디 찾기
  let docID = "";
  const snapshot = await getDocs(
    query(collection(db, collectionName), where("id", "==", userId.value))
  );
  console.log(snapshot);
  // QuerySnapshot  vs QueryDocumentSnapshot ....
  // QueryDocumentSnapshot로 뽑고 싶은데 방법을 forEach밖에 몰라서 강제로 이렇게 씀, 나중에 알면 수정하면 좋을듯..
  snapshot.forEach((e) => {
    // 문서아이디
    console.log(typeof e.id);
    docID = e.id;
  });
  // console.log(getDoc(doc(db, "user", docID)));
  const obj = {
    password: changePwInput.value,
  };
  updateDoc(doc(db, "user", docID), obj);
}

// 함수실행
idSearchForEmailBtn.addEventListener("click", () => {
  showIdByNameAndEamil(idSearchNameInput, idSearchEmailInput);
});

idSearchForTelBtn.addEventListener("click", () => {
  showIdByNameAndTel(idSearchNameInput, idSearchTelInput);
});

pwSearchBtn.addEventListener("click", () => {
  showPwChange(pwSearchIdInput, pwSearchEmailInput, pwSearchTelInput);
});

modalChangeBtn.addEventListener("click", () => {
  if (changeBtnInfo.innerHTML.length == 0) {
    alert("변경할 비밀번호를 적어주세요!");
  } else if (changeBtnInfo.innerHTML === "사용가능한 비밀번호 입니다:)") {
    changePw("user", pwSearchIdInput);
    alert("비밀번호가 변경되었습니다.");
    // 비밀번호가 성공적으로 변경되면 홈으로 이동하는 부분
    location.replace("#");
  } else {
    alert("잘못된 형식입니다:(");
  }
});
