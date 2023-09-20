// color.js
// console.log(`color.js running...`)

/**
 * .color : 색깔이 반영되는 곳
 * .plus : 수치 증가 버튼
 * .minus : 수치 감소 버튼
 * .hue : 반영된 수치가 나타나는 곳(범위 : 0~360)
 */

// 변수지정
const color = document.querySelector(`.color`)
const plus = document.querySelector(`.plus`)
const minus = document.querySelector(`.minus`)
const hue = document.querySelector(`.hue`)
//변수에 대한 콘솔 출력
// console.log(color)
// console.log(plus)
// console.log(minus)
// console.log(hue)

let value = 0;

// chagehue : 컬러값을 변경해주는 함수
const changehue = (param) => {
    // hue 의 텍스트값을 param
    hue.textContent = param;
    // color의 hue 값을 param
    color.style.backgroundColor = `hsl(${param}, 50%, 50%)`
}

// 수치 증가 버튼
plus.addEventListener(`click`, () => {
    if(value < 360){
        value += 10;
        // console.log(value)
        // hue.textContent = value;
        // color.style.backgroundColor = `hsl(${value}, 50%, 50%)`
        changehue(value)
    }
})

// 수치 감소 버튼
minus.addEventListener(`click`, () => {
    if(value > 0){
        value -= 10;
        // console.log(value)
        // hue.textContent = value;
        // color.style.backgroundColor = `hsl(${value}, 50%, 50%)`
        changehue(value)
    }
})

