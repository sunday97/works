const change = document.querySelector(".poster");
const thunder = document.querySelector(".thunder");
const changeBack = document.querySelectorAll(".rainy-mood-holder div");
// const changeBack2 = document.querySelector(".poster.background div");
// const cloudy = document.querySelector(".cloudy");

change.addEventListener("click", function () {
  change.classList.toggle("active");
  thunder.classList.toggle("active");
  //   changeBack2.classList.toggle("active");
  //   cloudy.classList.toggle("active");

  //  changeBack.classList.toggle("active");

  // .rainy-mood-holder div 작업
  changeBack.forEach((e) => {
    e.classList.toggle("active");
  });
});
