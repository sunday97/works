// console.log(`runming...`)

/**
 * #counter : 숫자가 변해야 할 곳
 * #start : 숫자가 증가하도록 작동하는 버튼
 * #stop : 숫자가 증가를 멈추는 버튼
 */

const counter = document.getElementById(`counter`)
const startBtn = document.getElementById(`start`)
const stopBtn = document.getElementById(`stop`)
const reset = document.getElementById(`reset`)
// console.log(counter)
// console.log(startBtn)
// console.log(stopBtn)
// console.log(reset)


// 카운터: 증가해야할 값
let index = 0;
// setInterval 함수의 아이디를 담을 변수
let timerId;

// setInterval의 특징은 실행 할 때마다 값이 중복 생성된다. 그래서 따로 아이디를 달아서 멈춰줘야 함 

startBtn.addEventListener(`click`, () => {
    // 만약 timerId에 값이 들어있다면
    if(timerId){
        // setInterval 함수 취소
        clearInterval(timerId)
    }

    // 비워진 timerId에 setInterval 함수 할당
    timerId = setInterval(() => {
        // 증가된 index값을 counter 내용으로 할당.
        index++
        counter.textContent = index
    }, 10)
})

stopBtn.addEventListener(`click`, () => {
    clearInterval(timerId)
})

reset.addEventListener(`click`, () =>{
    clearInterval(timerId)
    index = 0
    counter.textContent = index
})
