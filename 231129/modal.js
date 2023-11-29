// const box = document.querySelector(".box");
// const text = document.querySelector(".text");
// const overlay = document.querySelector(".overlay");

// 모달창이 열려있는지 여부를 저장하는 전역변수
let isModalOpen = false;
// function onClick() {
//   if (isModalOpen) {
//     isModalOpen = false;
//     box.classList.remove("modal");
//     text.classList.remove("visible");
//   } else {
//     isModalOpen = true;
//     box.classList.add("modal");
//     // setTimeout? opasity가 1이 되는 순간 바로 보이기 때문에 모달창이 움직이는 동안 계속해서 크기를 맞추려고 움직인다.
//     // 그렇기에 모달창 확대가 완료 된 시점에서 setTimeout란 비동기함수를 사용하여 타이밍을 맞춘다.
//     setTimeout(() => {
//       text.classList.add("visible");
//     }, 500);
//   }
// }

// ----------------------------------------------------

const boxs = document.querySelectorAll(".box");
const texts = document.querySelectorAll(".text");
const overlay = document.querySelector(".overlay");
// function onClick(index) {
//   if (isModalOpen) {
//     isModalOpen = false;
//     boxs[index].classList.remove("modal");
//     texts[index].classList.remove("visible");
//   } else {
//     isModalOpen = true;
//     boxs[index].classList.add("modal");
//     // setTimeout? opasity가 1이 되는 순간 바로 보이기 때문에 모달창이 움직이는 동안 계속해서 크기를 맞추려고 움직인다.
//     // 그렇기에 모달창 확대가 완료 된 시점에서 setTimeout란 비동기함수를 사용하여 타이밍을 맞춘다.
//     setTimeout(() => {
//       texts[index].classList.add("visible");
//     }, 500);
//   }
// }

// ----------------------------------------------------

boxs.forEach((box, i) => {
  box.addEventListener("click", () => {
    // console.log(box, i);
    Click(box, i);
  });
});

function Click(box, i) {
  if (isModalOpen) {
    isModalOpen = false;
    box.classList.remove("modal");
    texts[i].classList.remove("visible");
  } else {
    isModalOpen = true;
    box.classList.add("modal");
    // setTimeout? opasity가 1이 되는 순간 바로 보이기 때문에 모달창이 움직이는 동안 계속해서 크기를 맞추려고 움직인다.
    // 그렇기에 모달창 확대가 완료 된 시점에서 setTimeout란 비동기함수를 사용하여 타이밍을 맞춘다.
    setTimeout(() => {
      texts[i].classList.add("visible");
    }, 500);
  }
}

function onClick() {}
