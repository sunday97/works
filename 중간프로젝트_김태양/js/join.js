// console.log("run");

const reg = document.querySelector(".register");

//

reg.addEventListener("click", function () {
  const userId = document.querySelector("#id-input").value;
  const userPaw = document.querySelector("#password-input").value;
  const userPawChe = document.querySelector("#password-check-input").value;
  const userName = document.querySelector("#user-name").value;
  const userEmail = document.querySelector("#user-email").value;
  const userTelBef = document.querySelector("select").value;
  const userTelMid = document.querySelector("#mid-tel").value;
  const userTelAft = document.querySelector("#after-tel").value;
  const userTel = userTelBef + userTelMid + userTelAft;

  const obj = {
    id: userId,
    password: userPaw,
    name: userName,
    email: userEmail,
    tel: userTel,
  };

  //   console.log(obj);

  saveInfo(obj);

  //   정규식부분

  // 아이디 체크
  const idCheck = /^[A-Za-z0-9]{4,10}$/;
  console.log(idCheck.test(userId));
});

function saveInfo(content) {
  localStorage.setItem(content.id, JSON.stringify(content));
}
