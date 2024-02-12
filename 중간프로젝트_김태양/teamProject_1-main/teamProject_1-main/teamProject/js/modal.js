const badge = document.querySelector(".qr-icon");
const open = document.querySelector(".qr-img");
const overlay = document.querySelector(".overlay");

const exit = document.querySelector(".exit-box");

// badge.addEventListener("click", function () {
//   open.classList.toggle("modal");
//   overlay.classList.toggle("modal");
// });

// let isModalOpen = false;
// function onClick() {
//   if (isModalOpen) {
//     isModalOpen = false;
//     open.classList.remove("modalMain");
//     overlay.classList.remove("modalMain");
//   } else {
//     isModalOpen = true;
//     open.classList.add("modalMain");
//     overlay.classList.add("modalMain");
//   }
// }

exit.addEventListener("mouseover", () => {
  console.log("in");
  exit.innerHTML = `<img src="./img/logout_2.png" alt="로그아웃아이콘2" />`;
});

exit.addEventListener("mouseout", () => {
  console.log("out");
  exit.innerHTML = `<img src="./img/logout_1.png" alt="로그아웃아이콘1" />`;
});

exit.addEventListener("click", () => {
  sessionStorage.clear();
  location.replace("index.html");
});

if (sessionStorage.getItem("login")) {
  let isModalOpen = false;
  exit.classList.add("active");
  function onClick() {
    if (isModalOpen) {
      isModalOpen = false;
      open.classList.remove("modalMain");
      overlay.classList.remove("modalMain");
    } else {
      isModalOpen = true;
      open.classList.add("modalMain");
      overlay.classList.add("modalMain");
    }
  }
} else {
  badge.addEventListener("click", () => {
    alert("로그인해주세요!");
    location.replace("login.html");
  });
}
