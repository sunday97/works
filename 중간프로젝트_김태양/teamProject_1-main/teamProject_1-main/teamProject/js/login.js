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
            alert("어서오세요. 우산공유서비스[쓰슈]입니다.");
            // 세션저장
            sesionSave(idInput).then(() => {
              // main으로 이동
              location.replace("index.html");
            });

            l;
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
  // 아이디가 포함되어 있는지 확인 true/false
  console.log(idArr);
  console.log(idArr.includes(e.value));
  return idArr.includes(e.value);
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

async function sesionSave(id) {
  const snapshot = await getDatas("user");
  const arr = [];
  snapshot.forEach((doc) => {
    const { email, id, password, name, tel } = doc.data();
    arr.push({ id: id, pw: password, email: email, name: name, tel: tel });
  });
  console.log(arr.find((i) => i.id === id.value));
  sessionStorage.setItem(
    "login",
    arr.find((i) => i.id === id.value)
  );
}
