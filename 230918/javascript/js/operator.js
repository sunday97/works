// operator.js
// '연산자'라는 문자를 출력해보세요
console.log('연산자');

let value = 1 + 2; // 3
value = 1 +  +'1'; //유독 +연산자는 문자열이랑 결합한다.
value = 1 + Number('1'); // 2
value = 5 - 1; // 4
value = 10 - '1';  // 9
value = 10 - '강아지'; //NaN : Not a Number, 숫자형이 아닌 것을 계산하려고 했을 때 나오는 에러
value = 10 * 10; // 100
value = 1 / 2; // 0.5
value = 5 % 3; // 나머지를 구하는 연산자, 2
value = (1 + 2) * 3
console.log(value, typeof value)

// truthy, falsy
let x = 5;
// console.log(x + true);  // true = 1
// console.log(x + false);  // flase = 0
// null : 강제로 빈 값을 넣어줄 때 쓰는 자료형
console.log(x + null); // null = 0

// +연산자를 이용해서 문자열을 결합하는 방법

let pokemon;
let name = '피카츄'
let age = 28;
pokemon = '안녕 나는 ' + name + '야, 내 나이는 ' + age + '살이야;'
console.log(pokemon);

// 안녕하세요 userName 님, 로그인 되었습니다
// let message;
// let userName = '김태양';
// message = '안녕하세요 ' + userName + '님, 로그인 되었습니다.'
// console.log(message)

// userName님의 이메일 주소는 userEmail, 거주지는 userPlace 입니다.
// 문자열을 표현할 때 작은따옴표, 큰따옴표, 백틱(backtick) 가능
let userInfo;
let userName = '김태양';
let userEmail = "abcde@gmail.com";
let userPlace = `대전`;
let userAge = 26;
userInfo = userName + '님의 이메일 주소는 ' + userEmail + ', 거주지는 ' + userPlace + '입니다.' ; 
console.log(userInfo);
//ES6 부터 추가된 템플릿 리터럴 방식, 백팁 필수!
userInfo = `${userName}님의 이메일 주소는 ${userEmail}, 사용자의 나이는 ${userAge + 1}, 거주지는 ${userPlace}입니다.`
console.log(userInfo);

let text = 'Hello World';
console.log(text. length) // 문자열의 길이를 알 수 있는 .length
console.log(text.toUpperCase()) // 대문자로 변환
console.log(text.toLowerCase()) // 소문자로 변환

let num = 1;
num = num + 1;  // num = 2
num = num - 1;  // num = 1
num += 1; // num = num + 1, num = 2;
num -= 1; // num = num - 1, num = 1;
num *= 2; // num = num * 2, num = 2;
num /= 2; // num = num / 2, num = 1;
num %= 1; // num = num % 1, num = 0;
num++; // 증가연산자, 매번 사용할 때마다 1씩 증가.
num--; // 감소연산자, 매번 사용할 때만 1씩 감소.

console.log(num);

// 2 ,증가/감소 연산자가 뒤에 붙을 경우엔, 일단 값을 넣어둔 상태에서 증가
// 피연산자 수를 증가시키고, 증가 전의 값을 반환
let a = 1;
let b = a++; 
console.log(a, b) // 2, 1

// 증가/감소 연산자가 앞에 붙을 경우엔, 일단 값을 증가시킨 후에 담는다.
// 피연산자 수를 증가시키고, 증가 후의 값을 반환
a = 1;
b = ++a; 
console.log(a, b) // 2, 2
