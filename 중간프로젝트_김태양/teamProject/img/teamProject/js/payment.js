// console.log("run");

// global variable
const cardBox = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".fa-ellipsis-vertical");
const cardMid = document.querySelectorAll(".card-mid");
const regBtn = document.querySelector(".register");

card.forEach((e) => {
  e.addEventListener("click", function () {
    card.forEach((e) => {
      e.classList.remove("selected-card");
    });
    e.classList.add("selected-card");
    cardBox.insertAdjacentElement("afterbegin", e);
  });
});

regBtn.addEventListener("click", () => {
  const names = ["Pay", "우리은행", "KEB Hana Card"];
  const randNum = parseInt(Math.random() * 3 + 1);
  console.log(randNum);
  cardBox.insertAdjacentHTML(
    "beforeend",
    `<div class="card card${randNum}">
  <div class="card-up">
    <p class="card-title">
      <img src="img/우리카드 logo.svg" alt="" /> ${names[randNum - 1]}
    </p>
    <p>우리운행 *** 0042 <i class="fa-solid fa-chevron-right"></i></p>
    <span
      ><i class="fa-solid fa-ellipsis-vertical"
        ><span class="card-hover">우리체크카드</span></i
      ></span
    >
  </div>
  <!-- <div class="card-mid">우리체크카드</div> -->
  <div class="card-down card-down3"></div>
</div>`
  );
});
