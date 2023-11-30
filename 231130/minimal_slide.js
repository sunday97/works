console.log("minimal_slide.js is run");

const slider = document.querySelector(".gallery");
let startX = 0;
let scrollLeft = 0;
// 보통 변수명이 대문자면 '상수'다.
const SCROLL_SPEED = 3;

function doScroll(e) {
  e.preventDefault();
  const x = e.pageX;
  const move = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - move;
}

// 시작 및 종료 기능
// slider.addEventListener("mousedown", () => {
//   console.log("down");
// });
// slider.addEventListener("mouseup", () => {
//   console.log("up");
// });
// slider.addEventListener("mouseleave", () => {
//   console.log("leave");
// });
// 트래킹 기능
// slider.addEventListener("mousemove", () => {
//   console.log("move");
// });

// 결합
slider.addEventListener("mousedown", (e) => {
  slider.addEventListener("mousemove", doScroll);
  //   console.log(slider.scrollLeft);
  slider.classList.add("onDrag");
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseup", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});
slider.addEventListener("mouseleave", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});

// Q 맨 마지막에 처음 슬라이드로 돌아가는 버튼을 어떻게 만들면 좋을까?
// Q 무한히 슬라이드를 돌릴 수는 없을까?
