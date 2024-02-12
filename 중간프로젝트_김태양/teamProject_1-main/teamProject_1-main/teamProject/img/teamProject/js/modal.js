const badge = document.querySelector(".qr-icon");
const open = document.querySelector(".qr-img");
const overlay = document.querySelector(".overlay");

// badge.addEventListener("click", function () {
//   open.classList.toggle("modal");
//   overlay.classList.toggle("modal");
// });

let isModalOpen = false;

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
