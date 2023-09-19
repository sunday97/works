// app.js
console.log(`app`)

const friends = [`짱구`, `흰둥이`, `철수`, `훈이`, `유리`, `맹구`, `짱아`]
console.log(friends)

// 친구들은 총 몇명인가요 console.log()
console.log(`친구들은 총 ${friends.length}명 입니다.`)

// 흰둥이를 출력해주세요
console.log(friends[1]) // 흰둥이

// 짱아를 배열에서 빼주세요
// array.pop() 안에 값은 의미없이 가장 마지막 값을 날린다.
friends.pop()
console.log(friends)

//  짱아를 다시 배열에 추가.
friends.push(`짱아`)
console.log(friends)

// for 문
// for(초기화 변수; 조건; 증감 연산자){
    // 실행
// }
for(let i = 0; i < friends.length; i++){
    // 친구들 이름을 차례대로 출력
    // console.log(friends[i])
    console.log(`${friends[i]}는 ${i+1}번째 친구야`)
}

// 매개변수 x를 받아서 2를 곱하는 함수
const add = (x) => {
    return console.log(x * 2);
}

const numbers = [1, 2, 3, 4, 5]

// for 문을 이용해 차례대로 출력
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
    // add 함수를 이용하여 2,4 ...10 출력
    add(numbers[i])
}

const showName = (name) => {
    // console.log(`return 선행`) 
    return console.log(`제 이름은 ${name}입니다.`)
    // console.log(`return 후행`)  // return 아래 있는 내용은 실행되지 않는다.
}

showName(`return`)

// const friends = [`짱구`, `흰둥이`, `철수`, `훈이`, `유리`, `맹구`, `짱아`]

// friends의 내용을 for문으로 차례대로 꺼내 showName함수에 전달
for(let i = 0; i < friends.length; i++){
    showName(friends[i])
}
