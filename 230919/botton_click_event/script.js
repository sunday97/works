console.log(`script.js running...`)

// const를 이용해 title이란 변수에 h1#title 요소를 담아주세요
const title = document.querySelector(`#title`)
console.log(title)

// 1. button 가져와서 변수에 담다.
const button = document.querySelector(`#btn`)
console.log(`button`)
// 2. container 가져와서 변수 담는다.
// querySelectorAll 은 값을 배열형으로 가져온다
const container = document.querySelector(`.container`)
console.log(`container`)
// 3. button 클릭 시 container에 bg 클래스를 담는다.
button.addEventListener(`click`,() =>{
    container.classList.add(`bg`)
})


// button.addEventListener(`click`,() =>{
//     if(title.style.backgroundColor === `dodgerblue`){
//         title.classList.add(`bg`)
// } else {
//     title.classList.remove(`bg`)
// }
// })






// 제목을 클랙했을 때, alert 창이 뜨면서 '클릭'이라는 문구 출력
// addEventListener('이벤트이름', 실행할 함수)
title.addEventListener(`click`, () => {
    // alert(`클릭`)
    // 클랙을 했을 때 컬러가 red가 되도록 변경
    // title의 컬러값이 red라면
    if(title.style.color === `red`){
        // title의 컬러값을 black
        title.style.color = `black`
    } else {
        // title의 컬러값을 red
        title.style.color = `red`
    }
})

