console.log(`app`)

// getElementById는 ID를 기반으로 찾기에 #표현 필요 x
// const title = document.getElementById(`title`)

// querySelector는 태그, 클래스, 아이디 등 범용으로 사용키때문에 꼭 구분해서 적어줘야한다.
// const title = document.querySelector(`#title`)

// 익스플로러의 잔재
// const contents = document.getElementById(`title`)
// console.log(title)

// querySelector를 이용해서 title이라는 클래스를 가진 요소를 탐색해서 title변수에 출력

// querySelector는 기본적으로 가장 맨 위에 있는 것을 가져옴
// const title = document.querySelector(`.title`)
// console.log(title)

// All 붙이면 '유사배열~like NodeList~(몇몇배열함수 안 먹힘)'로 나온다.
const title = document.querySelectorAll(`.title`)
console.log(title)

console.log(title[2])

for(let i = 0; i < title.length; i++){
    // 요소들의 텍스트 내용을 `i번째 요소입니다.`로 변경
    console.log(title[i])
    // 'i'번째 요소요소를 'i'으로 변경 즉 i:i 대응이 되야 된다.
    // ㅑ번째의 텍스트 변경
    title[i].textContent = `${i}번째 요소입니다.`;
    // title[i].style.fontSize = `${(i+10)*2}px`;
    // title[i].style.fontWeight =  `500`;
    // i번째 red 클래스 추가
    title[i].classList.add`red`
    console.log(title.length)
    // 배열 마지막 요소의 red 클래스 제거
    title[title.length-1].classList.remove(`red`)
    // if문을 활용한 0번째 배열 'red'클래스 제거
    if(i === 0){
        // title[i].style.color = 'red'
        // title[i].classList.pop(`red`) -> 이건 안됨
        title[i].classList.remove(`red`)
    }
}



