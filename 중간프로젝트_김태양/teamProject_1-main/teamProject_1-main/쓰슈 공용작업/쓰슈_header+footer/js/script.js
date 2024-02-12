//.logo-bar .fa-bars = 햄버거
const bars = document.querySelector(".logo-bar .hamburger");
console.log(bars);

// .menu = category
const menu = document.querySelector(".category");
console.log(menu);

bars.addEventListener("click", () => {
  menu.classList.toggle("active");
});
