// console.log("run");

const boxes = document.querySelectorAll(".box");
const imgBox = document.querySelector(".imageBox");

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    console.log("over - ", e.currentTarget.classList.value);
    // 브라우저는 기본값이 drop이 막혀있기에 over에 e.preventDefault() 줘서 'drop'을 활성화시켜준다.
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  });
  box.addEventListener("dragenter", (e) => {
    console.log("endter - ", e.currentTarget.classList.value);
  });
  box.addEventListener("dragleave", (e) => {
    console.log("lever - ", e.currentTarget.classList.value);
    e.currentTarget.classList.remove("hovered");
  });
  box.addEventListener("drop", (e) => {
    console.log("drop - ", e.currentTarget.classList.value);
    e.currentTarget.appendChild(imgBox);
    e.currentTarget.classList.remove("hovered");
  });
});
