// console.log('script running...')

/**
 * 비교 연산자
 * 두 값이 같은지, 다른지. 큰지, 작은지 판단
 */

// let x = 1;
// console.log(x == 1); // ture, x와 1이 같다.;
// console.log(x === 1); // ture, x와 1 같다.;

// !(not) 연산자
// console.log(x != 1); // false, x와 1 다르다.;
// console.log(x !== 1); // false, x와 1이 다르다.;

// 자바스크립트는 등호 3개(===)를 기본으로 비교한다고 생가갛는 것이 좋다.
// console.log(1 == '1') // ture, 단순히 값만 같은지 비교.
// console.log(1 === '1') // false, '값' 과 '타입'까지 같은지 비교.

// console.log(x > 1) // false, x가 1보다 크다.
// console.log(x >= 1) // ture, x가 1과 같거나 크다.
// console.log(x < 1) // false, x가 1보다 작다.
// console.log(x <= 1) // ture, x가 1보다 같거나 작다.



/**
 * if문(조건문)
 * 조건이 들어오면, ture, false, 혹은 작은지, 큰지, 같은지 등을 판단해서 실행하는 문법.
 */

let value = 543;

// value가 10보다 크다면, 조건 실행
// 조건을 이어서 쓰려면 위 조건에 붙여서 사용한다. ex)' } else if '부분
if (value > 9){
    console.log(`${value}는 10보다 큽니다`)
} else if (value === 10){
    console.log(`${value}(은)는 10과 같습니다`)
} else if(value < 10){
    console.log(`${value}(은)는 10보다 작습니다`)
} else {    
    //모두 아니라면...
    console.error(`숫자를 입력해주세요!`)
}

// if문은 참(true)일 때 실행
// value의 자료 타입이 string(문자형)인지 체크
if(typeof value === `string`){
    console.log(`문자형입니다.`)
} else {
    // else 는 거짓(false)일 때 실행
    console.log(`숫자형입니다.`)
}

// 짜장 7000, 짬뽕 9000
let money = 8140;

// money 9000보다 작으면, "짜장면을 먹을 수 있습니다."
//  그렇지 않다면 "짬뽕을 먹을 수 있습니다." 출력 되로록 if문 작성
if(money < 9000){
    console.log(`짜장면을 먹을 수 있습니다.`)
} else {
    console.log(`짬뽕을 먹을 수 있습니다.`)
}
// 3항 연산자
money < 9000 ? console.log(`짜장면`) : console.log(`짬뽕`)
