// console.log("run");

const reg = document.querySelector(".register");

//

const userId = document.querySelector("#id-input");

const userPaw = document.querySelector("#password-input");
const userPawChe = document.querySelector("#password-check-input");

const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userTelBef = document.querySelector("select");
const userTelMid = document.querySelector("#mid-tel");
const userTelAft = document.querySelector("#after-tel");
const userTel = userTelBef.value + userTelMid.value + userTelAft.value;

const idInfo = document.querySelector(".id-info");
const pwInfo = document.querySelector(".pw-info");
const rePwInfo = document.querySelector(".re-pw-info");

const emailInfo = document.querySelector(".email-info");

reg.addEventListener("click", function () {
  const obj = {
    id: userId.value,
    password: userPaw.value,
    name: userName.value,
    email: userEmail.value,
    tel: userTel,
  };

  // saveInfo(obj);
});

// 정규식으로 확인작업 함수
function isVaildId(id) {
  id.addEventListener("keyup", function () {
    // console.log(userId.value);
    if (id.value.length == 0) {
      idInfo.innerHTML = "";
    } else if (idCheck.test(id.value)) {
      idInfo.innerHTML = "사용가능한 아이디 입니다:)";
    } else {
      idInfo.innerHTML = "잘못된 형식입니다:(";
    }
  });
}

function isVaildPw(pw) {
  pw.addEventListener("keydown", function () {
    if (pw.value.length == 0) {
      pwInfo.innerHTML = "";
    } else if (pwCheck.test(pw.value)) {
      pwInfo.innerHTML = "사용가능한 비밀번호 입니다:)";
    } else {
      pwInfo.innerHTML = "잘못된 형식입니다:(";
    }
  });
}
function isVaildRePw(rePw, pw) {
  rePw.addEventListener("keydown", function () {
    if (rePw.value == pw.value) {
      rePwInfo.innerHTML = "일치합니다:>";
    } else {
      rePwInfo.innerHTML = "불일치합니다:<";
    }
  });
}

isVaildId(userId);
isVaildPw(userPaw);
isVaildRePw(userPawChe, userPaw);

// 아이디 체크
const idCheck = /^[A-Za-z0-9]{4,10}$/;
// console.log(idCheck.test(userId));
// 비밀번호 체크
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
// 영대소문자,특수문자(!@#$%^*+=-),숫자(0-9)의 조합인데 8이상 15이하

function saveInfo(content) {
  localStorage.setItem(content.id, JSON.stringify(content));
  content = {}; // 성공 시 초기화
}
