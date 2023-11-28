// console.log("run");

const card = document.querySelectorAll(".card");
// console.log(card);
const dots = document.querySelectorAll(".fa-ellipsis-vertical");
const cardMid = document.querySelectorAll(".card-mid");

card.forEach((e) => {
  e.addEventListener("click", function () {
    card.forEach((e) => {
      e.classList.remove("selected-card");
    });
    e.classList.add("selected-card");
  });
});

// dots.forEach((e, index) => {
//   e.addEventListener("click", function () {
//     cardMid[index].classList.toggle("card-mid-active");
//   });
// });
