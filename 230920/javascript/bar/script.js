// script.js
console.log(`script.js running...`)

// 가장 먼저 담아야 하는 값을 생각하고 변수로 지정한다.
/********* 
*#number : 증가해야할 숫자 
*#inc : 증가버튼
*#dec : 감소버튼
*********/
const num = document.getElementById(`number`)
// console.log(num)
const inc = document.querySelector(`#inc`)
// console.log(inc)
const dec = document.getElementById(`dec`)
// console.log(dec)
const bar = document.querySelector(`.bar`)
console.log(bar)


const send = document.getElementById(`send`)


// 증가할 값이 들어있는 변수 (const는 매개변수가 고정될 경우에만...)
let counter = 0;


// 블록의 안과 밖!!!

// inc : increment(증가)하는 일
// addEventListener(`이벤트이름`, 함수)
// inc.addEventListener(`click`, function(){}) 의 축약
inc.addEventListener(`click`, () => {
    // 1. 누적시키는 방법
    // counter = counter + 1;
    // counter += 1;
    // 2. 증가연산자(하나씩 늘어나는)
    // counter++;
    if (counter < 100) {
        counter += 10;
        num.textContent = counter;
        // numberd의 text 값이 증가.
        // bar의 길이가 증가
        bar.style.width = `${counter}%`
        console.log(counter)
        // inc.style.transform = `rotate(${counter}deg)`
    }
})

// dec : decrement(감소)하는 일
dec.addEventListener(`click`, () => {

    if (counter > 0) {
        counter -= 10;
        // counter--;
        num.textContent = counter;
        // dec.style.transform = `rotate(${counter}deg)`
        bar.style.width = `${counter}%`
    }
    console.log(counter)
})

