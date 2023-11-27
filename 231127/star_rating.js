// console.log("star_rationg");

const stars = document.querySelectorAll(".stars i");

// 요즘 트랜드는 직관적임

// 다수의 경우
stars.forEach((star, i) => {
  star.addEventListener("click", (e) => {
    checkStars(i);
    console.log(checkStars(i));
  });
});

// 소량의 경우(직관적)
// - html에서 onclick에 파라미터에 인덱스정보를 작성해서 함수를 작동 시 변수stars(배열)과 수를 일치 시켜서 작동하게 한다.
function checkStars(clickIndex) {
  console.log("click", clickIndex);
  stars.forEach((star, i) => {
    // 조건식, 클릭된 별의 인덱스보다 작으명 active클래스 추가(add)하고,
    // 크면 active 클래스를 삭제(remove)한다.
    if (i <= clickIndex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
