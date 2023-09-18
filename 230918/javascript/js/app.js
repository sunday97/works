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

// 택스트 내용을 바꾸는 방법
text.textContent = `바뀐 내용입니다`;
text.innerText = `이렇게도 바꿀 수 있습니다`
// HTML 요소를 추가할 수 있는 방식
text.innerHTML = `<span>이렇게 태그를 넣어서 바꿀 수 있습니다</span>`

// gragh 라는 아이디를 통해서 element 요소를 가져옴
const barGragh = document.getElementById(`gragh`)
// gragh 요소에서 data-value 값을 가져옴
const graghValue = barGragh.dataset.value;

// gragh 요소의 폭을 graghValue 만큼 조정
barGragh.style.width = graghValue + `%`;
// gragh 요소의 텍스트를 graghValue 값으로 넣음.
// barGragh.innerHTML = `<span>${graghValue}</span>%`;
barGragh.textContent = `${graghValue}%`
// gragh 요소의 컬러, 폰트 사이즈 조정
barGragh.style.fontSize = `30px`;
barGragh.style.color = `white`;

console.log(barGragh, graghValue)
