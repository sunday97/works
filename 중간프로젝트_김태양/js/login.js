// import 부분
import * as firebase from "./firebass.js";
const {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deletedatas,
  updateDoc,
  deleteField,
  updatedatas,
  where,
  getDatasLogin,
} = firebase;

// Global variable
const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#password-input");
const searchBtn = document.querySelector(".search-id-password");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginBtn.addEventListener("click", function () {
  isVaildId(idInput).then((e) => {
    if (e) {
      if (e == true) {
        isVaildPw(idInput, pwInput).then((f) => {
          if (f == true) {
            alert("로그인 성공");
          } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
          }
        });
      }
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  });
});

async function isVaildId(e) {
  const snapshot = await getDatas("user");
  // console.log(snapshot);
  const idArr = [];
  const idPwArr = [];
  snapshot.forEach((doc) => {
    // console.log(doc.data());
    const { email, id, password, name, tel } = doc.data();
    // console.log(typeof id);
    idArr.push(id);
    idPwArr.push({ id: id, pw: password });
  });
  // console.log("pormise 내에서 idArr : " + idArr);
  // console.log(idPwArr);
  // console.log("pormise 내에서 검사결과 : " + idArr.includes(e.value));
  // console.log(idPwArr.find((item) => item.id === e.value));
  // const idPwObj = idPwArr.find((item) => item.id === e.value);
  // console.log(idPwObj["pw"]);
  return idArr.includes(e.value);
  // var exsitBox = idArr.includes(userId);
}

async function isVaildPw(a, b) {
  const snapshot = await getDatas("user");
  const idPwArr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    idPwArr.push({ id: id, pw: password });
  });
  const idPwObj = idPwArr.find((item) => item.id === a.value);
  // console.log(idPwObj.pw);
  // console.log(b.value);
  return idPwObj.pw === b.value;
}
