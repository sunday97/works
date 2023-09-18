// app.js
//콘솔에 'app'을 출력해주세요

console.log('app')


// 문서안에서 title이라는 아읻를 가진 요소를 찾아서 text라는 변수 안에 담은 상황
const size = 60;
const text = document.getElementById('title');
console.log(text)
text.style.color = `red`;
// font-size:1rem;
// camelCase로 속성 변화.
// text.style.fontSize = `50px`;
//size 변수를 이용해서 fontSize 값을 변경해주세요
// 최종 결과값이 60px
// DOM을 제어한다 = html 요소들을 추가, 수정, 삭제...
text.style.fontSize = `${size}px`; // 템플릿 방식
text.style.fontSize = size + `px`; // 문자열 방식


