// for.js
// for문 - 일정 횟수만큼 반복하기 위해서 사용
// console.log(`for.js runnig...`)
// for(초기화 변수, 조건, 증감)
// i = index번호
// for(let i = 0; i <= 10; i++){
//     console.log(`i번째 : ${i}`)
// }


// 중첩사례
// for(let i = 0; i <= 10; i++){
//     console.log(`i번째 : ${i}`)
//     for(let j = 0; j<10; j++){
//         console.log(`j번째 : ${j}`)
//     }
// }


// const pokemon = [`피카추`,`이브이`,`라이츄`,`파이리`,`꼬부기`,`발칸`,`텅장`,`썬더`]
// // pokemon.length 로 배열의 길이를 가져올 수 있다.
// for(let i = 0; i < pokemon.length; i++){
//     console.log(pokemon[i])
// }

// 구구단을 출력해주세요
// 9단 출력

// for (초기화; 조건; 증감)
// 무엇이 필요한 값인지 생각하자...
// $ 앞에 %c를 붙여서 변화속성을 지정한다.
for(let i = 2; i <= 9; i++){
    console.log(`%c${i}단`, `background-color:red; color:white; padding: 2px 8px; font-size: 18px; font-weight:bold;`);
    for(let j = 1; j <=9; j++)
    console.log(`${i}x${j}=${i*j}`)
}
// 변수style로 작성해서 적용
const style = `background-color:red; color:white; padding: 2px 8px; font-size: 18px; font-weight:bold;`;
for(let i = 2; i <= 9; i++){
    console.log(`%c${i}단`, style);
    for(let j = 1; j <=9; j++)
    console.log(`%c${i}x${j}=${i*j}`, style)
}

let star = ``;
for(let i = 0; i < 5; i++){
    // star = star + `*`
    star += `*`
    console.log(star)
}
