// function.js
// console.log(`function.js running...`)
/** 
 * add 라는 이름의 함수
 * x와 y라는 값을 받아서 더하는 함수
 * x, y : 매개변수, Parameter
*/

function add1 (x, y){
    return x + y;
}
console.log(add1(5, 2));

function add (x, y){
    return console.log(`덧셈결과는  ${x + y}`);
}
add(7, 7) // 사용하는 방법

//곱하기 함수 작성
function multiply(x, y){
    // 함수 안에서 다른 함수를 실행할 수 있다.
    add(x, y);
    // console로 곱셉 결과 출력
    return console.log(x * y);
}
multiply(3, 4) // 함수실행

// fat arrow function, 화살표 함수
const addfunc = (x, y) => {
    return console.log(x + y)
}
addfunc(10, 20)

// 매개변수를 받아서 그래도 출력하는 함수
// const showName = (name) => {
//     return console.log(`제 이름은 ${name}입니다.`)
// }
// 매개변수가 하나고, 한 줄만 실행할 때는 리턴(return)없이 바로 출력하돍 축약해서 쓸 수 있다.
const showName = name => console.log(`제 이름은 ${name}입니다.`)
showName(`태양`)
