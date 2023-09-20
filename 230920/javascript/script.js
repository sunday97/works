// script.js
console.log(`script.js running...`)

// `선언` 과 `실행`

// 더하기 함수 작성 ES5방식
// 변수값은 되도록 영어, 영어는 1바이트, 한글은 2바이트. 문제생길 소지가 있음.
// function add(매개변수, parameter){
//     return 매개변수 + parameter;
// }
function add(x, y) {
    return x + y;
}
// 실행 (함수는 어디까지나 선언(도면)이고 실행(명령)은 해줘야 표기(작동)된다.)
console.log(add(2, 3))

//  function(함수) 축약형
// Fat arrow function, 혹은 화살표 함수
const addFunc = (x, y) => {
    return console.log(x + y);
}
// 실행
addFunc(5, 5)

// 매개변수가 '하나'일 때, 화살표함수를 축약해서 표현하는 방법.
// const double = (x) => {
//     return console.log(x * x);
// }
// 의 축약은 아래와 같다.
const double = x => console.log(x * x);

// 매개변수를 제곱하는 함수
double(4)

// 일반적인 화살표함수의 형태
// const showName = (name) => {
//     return console.log(`제 이름은 ${name}입니다.`)
// }
// 따옴표 종류 : 작음 따음표('') / 큰 따옴표("") / 백틱(``)
// 화살표함수 축약형
// const showName = name => console.log(`제 이름은 ${name}입니다.`)


// if문
const 조건 = true
if (조건) {
    // 조건이 맞을 경우 실행되는 내용
    console.log(조건)
} else {
    // 조건이 안 맞을 경우 실행되는 내용(else는 꼭 필수는 아님.)
}

// showName함수의 ES5 형식 - ES6이전의  일발적인 함수 선언 형태
function showName(name) {
    // 매개변수 name의 타입이 'string'일 경우에만 출력
    // if() 안에 비교 연산자를 활용 알맞은 조건 넣어주세요
    console.log(typeof name)
    console.log(`매개변수의 타입은 ${typeof name}입니다`)
    console.log(`매개변수의 길이는 ${name.length}입니다`)
    //  typeof name의 값은 'string' 이다.
    if (typeof name === `string`) {
        return console.log(`제 이름은 ${name}입니다`)
    }
    console.log(`매개변수의 타입은 ${typeof name}입니다`)
    console.log(`매개변수의 길이는 ${name.length}입니다`)
    // return 아래 작성은 실행 x
}

showName(`태양`)




