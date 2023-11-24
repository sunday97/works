// first - setting logic flow!
// 어려운 함수과정일수록 중요하다.
function register() {
  // 인풋의 value를 받는다.
  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const gender = document.querySelector("#gender").value;
  const job = document.querySelector("#job").value;
  const address = document.querySelector("#address").value;
  //   console.log(id, name, gender, job, address);

  // 객체를 생성한다
  const content = {
    id: id,
    name: name,
    gender: gender,
    job: job,
  };
  // address 추가
  content.address = address;

  // console.log(content);

  // 객체의 유효성검증(유저의 (input)정보를 검증)
  if (isValidInput(content)) {
    // 로컬스토리지에 저장한다.
    saveInfo(content);

    // 문제 없다면 input창을 clear한다.
    clearInput();
  }
}

function isValidInput(content) {
  if (content.id.length === 0) {
    alert("ID를 입력해주세요");
    return false;
  } else if (content.name.length === 0) {
    alert("이름을 입력해주세요");
    return false;
  } else if (content.gender.length === 0) {
    alert("성별을 입력해주세요");
    return false;
  } else {
    return true;
  }
}

function saveInfo(content) {
  localStorage.setItem(content.id, JSON.stringify(content));
}
function loadInfo(id) {
  const newInfo = JSON.parse(localStorage.getItem(id));
  console.log(newInfo);
  return newInfo;
}

function clearInput() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#gender").value = "";
  document.querySelector("#job").value = "";
  document.querySelector("#address").value = "";
}

function searchID() {
  // 검색창의 입력된 id를 가져온다
  const searchInput = document.querySelector(".search-input").value;

  // id를 이용하여 로컬스토리지를 검색한다
  const newObject = loadInfo(searchInput);

  // 검색되면, 인풋창에 값을 표시한다
  if (newObject) {
    document.querySelector("#id").value = newObject.id;
    document.querySelector("#name").value = newObject.name;
    document.querySelector("#gender").value = newObject.gender;
    document.querySelector("#job").value = newObject.job;
    document.querySelector("#address").value = newObject.address;
  } else {
    // 검색되지 않으면, 에러를 표시한다
    alert("존재하지 않은 아이디입니다:(");
  }
}
