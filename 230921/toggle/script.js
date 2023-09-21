console.log(`script.js`)

const toggle = document.querySelector(`.toggle`)
// console.log(toggle)

// classList 객체에 대한 정보 조회
// console.log(toggle.classList)

// add 메소드를 이용해 class "active" 추가
// toggle.classList.add(`active`)
// remove 메소드를 이용해 class "active" 제거
// toggle.classList.remove(`active`)

// class "active"가 존재하는 유무
// console.log(toggle.classList.contains(`active`))

// toggle을 클릭 시 active가 있다면 제거, 없다면 추가

// 1번 방법!!!
// toggle.addEventListener(`click`, () => {
//     if(toggle.classList.contains(`active`) == false){
//         toggle.classList.add(`active`)
//     }else{
//         toggle.classList.remove(`active`)
//     }
// })

// !(not) 연산자...부정값 출력
// toggle.addEventListener(`click`, () => {
//     if(!toggle.classList.contains(`active`) == true){
//         toggle.classList.add(`active`)
//     }else{
//         toggle.classList.remove(`active`)
//     }
// })

// 2번 방법!!!
//3항 연산자의 경우 (addEventListener안에서 실행됨을 잊지마.)
// (조건:참) ? (참일 경우 실행되는 부분) : (거짓일 때 싱행되는 부분)
// toggle.addEventListener(`click`, () => {
    
// toggle.classList.contains('active') 
// ? toggle.classList.remove(`active`) 
// : toggle.classList.add(`active`)

// })

// 3번 방법!!!
// toggle 메소드
// element.classList.toggle(`클래스`)
// element에 `클래스`가 있으면 삭제, 없으면 추가해주는 method.
toggle.addEventListener(`click`, () => {
    toggle.classList.toggle(`active`)
})