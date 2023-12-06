const slideContainer = document.querySelector(".items");
// 복수는 -s 또는 List
const slideList = document.querySelectorAll(".item");

let current = 0;
let prev = slideList.length - 1;
let next = 1;

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slideList.length - 1);
const gotoNext = () =>
  current < slideList.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;
  // 모든 슬라이드 div태그 클래스 초기화
  for (let i = 0; i < slideList.length; i++) {
    slideList[i].classList.remove("active");
    slideList[i].classList.remove("prev");
    slideList[i].classList.remove("next");
  }
  if (prev < 0) {
    // prev가 -1이 되는 경우
    prev = slideList.length - 1;
  }
  if (next > slideList.length - 1) {
    // next가 6이 되는 경우
    next = 0;
  }

  slideList[current].classList.add("active");
  slideList[prev].classList.add("prev");
  slideList[next].classList.add("next");
};
