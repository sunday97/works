const userName = document.getElementById(`username`);
console.log(userName);

// userName의 텍스트 내용을 prompt에서 받은 값으로 교체
// prompt('사용자에게 보여줄 메세지', '기본값')
let value = prompt(`이름을 입력해주세요`, `기본값`);
userName.textContent = `${value}`;

let color = prompt(`원하는 컬러를 입력해주세요`, `dodgerblue`);
userName.style.color = color;

let font = prompt(`원하는 크기를 입력하세요`, `50px`);
userName.style.fontSize = font;
// console.log(value)
