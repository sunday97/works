// console.log("run");
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
} = firebase;

// Global variable
const reg = document.querySelector(".register");

const cheBox = document.querySelector("#terms-checkbox");
const userId = document.querySelector("#id-input");
const userPaw = document.querySelector("#password-input");
const userPawChe = document.querySelector("#password-check-input");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userTelBef = document.querySelector("select");
const userTelMid = document.querySelector("#mid-tel");
const userTelAft = document.querySelector("#after-tel");
const userTel = userTelBef.value + userTelMid.value + userTelAft.value;
const duCheBtn = document.querySelector(".id-dup-che-btn");

const idInfo = document.querySelector(".id-info");
const pwInfo = document.querySelector(".pw-info");
const rePwInfo = document.querySelector(".re-pw-info");
const nameInfo = document.querySelector(".name-info");
const emailInfo = document.querySelector(".email-info");
const midTelInfo = document.querySelector(".mid-tel-info");
const aftTelInfo = document.querySelector(".aft-tel-info");

// 아이디 체크
const idCheck = /^[A-Za-z0-9]{4,10}$/;
// console.log(idCheck.test(userId));
// 비밀번호 체크
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
// 영대소문자,특수문자(!@#$%^*+=-),숫자(0-9)의 조합인데 8이상 15이하

// 이름 첵
const nameCheck = /^[가-힣]{3,10}$/;
// 한글,3자 이상 10자 이하

// 이메일 체크
const eCheck = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// 전화번호 체크
const telCheck = /^[0-9]{4}$/;

reg.addEventListener("click", function () {
  if (
    (cheBox.checked == true,
    idInfo.innerHTML == "사용가능한 아이디 입니다:)" &&
      rePwInfo.innerHTML == "일치합니다:)" &&
      nameInfo.innerHTML == "좋아요:)" &&
      emailInfo.innerHTML == "좋아요:)" &&
      midTelInfo.innerHTML == ":)" &&
      aftTelInfo.innerHTML == ":)")
  ) {
    // 모든 정규식을 통과했을 경우
    const userObj = {
      id: userId.value,
      password: userPaw.value,
      name: userName.value,
      email: userEmail.value,
      tel: userTelBef.value + userTelMid.value + userTelAft.value,
    };
    addDatas("user", userObj);
    userId.value = "";
    userPaw.value = "";
    userPawChe.value = "";
    userName.value = "";
    userEmail.value = "";
    userTelMid.value = "";
    userTelAft.value = "";
    alert("우산대여서비스 '쓰슈'에 오신 걸 환영합니다:)");
    // 메인페이지로 이동하는 함수 추가 예정
  } else {
    alert("잘못된 형식이 들어있어요! 다시 확인해주세요.");
  }
});

// 정규식으로 확인작업 함수
function isVaildId(id) {
  id.addEventListener("keyup", function () {
    // let exsitBox = false;
    if (id.value.length == 0) {
      idInfo.innerHTML = "";
      idInfo.style.color = "red";
    } else if (idCheck.test(id.value)) {
      idInfo.style.color = "green";
      idInfo.innerHTML = "좋아요:)";
    } else {
      idInfo.style.color = "red";
      idInfo.innerHTML = "잘못된 형식입니다:(";
    }
  });
}

function isVaildPw(pw) {
  pw.addEventListener("keyup", function () {
    if (pw.value.length == 0) {
      pwInfo.style.color = "red";
      pwInfo.innerHTML = "";
    } else if (pwCheck.test(pw.value)) {
      pwInfo.style.color = "green";
      pwInfo.innerHTML = "사용가능한 비밀번호 입니다:)";
    } else {
      pwInfo.style.color = "red";
      pwInfo.innerHTML = "잘못된 형식입니다:(";
    }
  });
}
function isVaildRePw(rePw, pw) {
  rePw.addEventListener("keyup", function () {
    if (rePw.value.length == 0) {
      rePwInfo.style.color = "red";
      rePwInfo.innerHTML = "";
    } else if (rePw.value == pw.value) {
      rePwInfo.style.color = "green";
      rePwInfo.innerHTML = "일치합니다:)";
    } else {
      rePwInfo.style.color = "red";
      rePwInfo.innerHTML = "불일치합니다:(";
    }
  });
}

function isVaildName(name) {
  name.addEventListener("keyup", function () {
    if (name.value.length == 0) {
      nameInfo.style.color = "red";
      nameInfo.innerHTML = "";
    } else if (nameCheck.test(name.value)) {
      nameInfo.style.color = "green";
      nameInfo.innerHTML = "좋아요:)";
    } else {
      nameInfo.style.color = "red";
      nameInfo.innerHTML = "틀린 형식입니다:(";
    }
  });
}

function isVaildEmail(email) {
  email.addEventListener("keyup", function () {
    if (email.value.length == 0) {
      emailInfo.style.color = "red";
      emailInfo.innerHTML = "";
    } else if (eCheck.test(email.value)) {
      emailInfo.style.color = "green";
      emailInfo.innerHTML = "좋아요:)";
    } else {
      emailInfo.style.color = "red";
      emailInfo.innerHTML = "올바른 형식이 아닙니다:(";
    }
  });
}
function isVaildTel(tel, telinfo) {
  tel.addEventListener("keyup", function () {
    if (tel.value.length == 0) {
      telinfo.style.color = "red";
      telinfo.innerHTML = "";
    } else if (telCheck.test(tel.value)) {
      telinfo.style.color = "green";
      telinfo.innerHTML = ":)";
    } else {
      telinfo.style.color = "red";
      telinfo.innerHTML = ":(";
    }
  });
}

function isDup(id) {
  duCheBtn.addEventListener("click", () => {
    if (idInfo.innerHTML == "좋아요:)") {
      getUserId(id.value).then((e) => {
        console.log("Func isDup 안에서 e 값 : " + e);

        if (e == false) {
          idInfo.style.color = "green";
          idInfo.innerHTML = "사용가능한 아이디 입니다:)";
        } else {
          idInfo.style.color = "red";
          idInfo.innerHTML = "누군가 사용하고 있어요:(";
        }

        // console.log(id.value);
      });
    }
  });
}

isVaildId(userId);
isVaildPw(userPaw);
isVaildRePw(userPawChe, userPaw);
isVaildName(userName);
isVaildEmail(userEmail);
isVaildTel(userTelMid, midTelInfo);
isVaildTel(userTelAft, aftTelInfo);
isDup(userId);

async function getUserId(userId) {
  const snapshot = await getDatas("user");
  // console.log(snapshot);
  const idArr = [];
  snapshot.forEach((doc) => {
    // console.log(doc.data());
    const { email, id, password, name, tel } = doc.data();
    // console.log(typeof id);
    idArr.push(id);
  });
  // console.log("pormise 내에서 idArr : " + idArr);
  // console.log("pormise 내에서 검사결과 : " + idArr.includes(userId));
  return idArr.includes(userId);
  // var exsitBox = idArr.includes(userId);
}

// getUserId();
