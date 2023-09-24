console.log(`math`)
console.log(`--PI--`)
// PI
console.log(Math.PI)

console.log(`--절대값--`)

// 절대값
console.log(Math.abs(-1))  // 1
console.log(Math.abs(1))  // 1
console.log(Math.abs(`1`))  // 1

console.log(`--반올림--`)

// 반올림
console.log(Math.round(1.4))  // 1
console.log(Math.round(1.5))  // 2

console.log(`--올림--`)

// 올림
console.log(Math.ceil(1.2))  // 2
console.log(Math.ceil(-1.2))  // -1

console.log(`--버림--`)

// 버림
console.log(Math.floor(1.9999999999999))  // 1
console.log(Math.floor(-1.9999999999999))  // -2

console.log(`--랜덤--`)

// random : 0부터 0.99999999999999999....
console.log(Math.random())  // 0.xxxxxxx
console.log(Math.random()+1)  // 1.xxxxxx
// Math.random() *(최댓값 - 최솟값 + 1) + 최솟값;



let max = 45;
let min = 1;
const random = Math.random() * (max - min + 1) + min
console.log(random)
console.log(Math.floor(random))
// random = Math.floor(Math.random() * (max - min + 1) + min)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// 최소, 최대 값을 받아 해당 범위만큼 난수를 생성하는 함수
const randomGenerator = (max, min) => {
    return console.log(Math.floor(Math.random() * (max - min + 1) + min))
}
randomGenerator(1,77)