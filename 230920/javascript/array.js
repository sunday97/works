// array.js
console.log(`array.js running`)

// 문제가 생기면 그 항목 아래론 아무 작동을 하지 않는다. 그렇기 때문에 차라리 주석처리를 해놓고 메모를 해라.

const number = [1, 2, 3, 4, 5, 6]
const animal = [`고양이`, `강아지`, `코끼리`]

// number 배열의 길이 출력
console.log(number.length);

// 객체, object
const classRoom = {
    number : `202`,
    students : `20`,
    aircon : true,
    computer : true,
    pokemon : [`피카츄`, `꼬부기`],
    func : () => {
        console.log(`함수도 담을 수 있다.`)
    }

}
// 객체에는 배열도 담을 수 있다.
console.log(classRoom.pokemon)
console.log(classRoom.pokemon[0])
classRoom.func()


// classRoom 객체에서 number라는 키를 이용해 값을 출력함.
// 객체의 값을 바로 수정도 가능
classRoom.number = `300`
console.log(classRoom.number)

// classRoom의 학생 수 출력
console.log(classRoom["students"])

// 점심메뉴

const lunch = [
    {
        name : "짜장면",
        cost : 7000
    },
    {
        name : "짬뽕",
        cost : 8000
    },
    {
        name : "김밥",
        cost : 3500
    },
    {
        name : "콩나물국밥",
        cost : 6000
    }
]
// "짜장면"이 출력되도록 해봐
console.log(lunch[0].name)
console.log(lunch[0]["name"])

console.log(lunch[3].cost)
console.log(lunch[3][`cost`])

// for - 반복문
// for(초기화; 조건; 증가/감소){
    // 반복해서 해야할 일
// }

console.log(`--------------------`)

let total = 0;

// 리스트
const list = document.getElementById(`list`)
list.style.color = `red`;

console.log(list)

for( let i = 0; i < lunch.length; i++){
    // console.log(`MenU ${i+1}`)
    // 각 메뉴의 이름
    // console.log(lunch[i].name)
    // 각 메뉴의 가격
    // console.log(lunch[i].cost)
    // '짜장면의 가격은 7000원 입니다.' 형태로 출력
    // 숫자형(number).toLocaleString(`ko-kr`) 은 현지 통화기준으로 한국식에 맞춰 천단위 구분자를 표현함.
    // console.log(`${lunch[i].name}의 가격은 '${lunch[i].cost.toLocaleString(`ko-kr`)}원' 입니다.`)
    
    // 전체 가격의 합
    // total = total + lunch[i].cost
    total += lunch[i].cost

    // HTML에 차트 뿌리기
    // list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    // document.body.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`

    // 변수 지정없이 하는 법
    // document.body.querySelector(`#list`)는 doc에서 #list를 찾아서 라는 말. 이걸 list 변수에 붙여서 짧게도 가능하다.
    document.body.querySelector(`#list`).innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`

}
console.log(`총합은 ${total.toLocaleString(`ko-kr`)}원 입니다`)


// title.textContent = `총합은 ${total.toLocaleString(`ko-kr`)}원 입니다`