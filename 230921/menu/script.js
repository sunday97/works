// console.log(`.script.js`)

// .menu-item이라는 클래스가 붙은 요소들은 모두 가져와야함.
/** 
*.getElementById = 아이디를 기반으로 요소를 탑색해서 가져옴
*.querySelector = 범용으로 사용.
*.querySelectorAll = 위와 같지만 복수의 요소를 취할 때 사용
*/

const menuItem = document.querySelectorAll(`.menu-item`)
// console.log(menuItem)

/** ********************
// 마지막번째??
menuItem[menuItem.length - 1]
// console.log(menuItem[menuItem.length - 1])
// 마지막 번째 active 클래스 추가할 경우
menuItem[4].addEventListener(`click`, (e) => {

    // 기본적으로 발생하는 이벤트 취소하는 메소드
    e.preventDefault();
    // 이벤트 전파를 막는 메소드
    e.stopPropagation
    // ....그러나 a태그는 막지 못했다......

    // active 클래스 추가
    menuItem[4].classList.add(`active`)
})
// 첫 번째 active 클래스 제거할 경우
menuItem[0].addEventListener(`click`, () => {
    // active 클래스 제거
    menuItem[0].classList.remove(`active`)
})
******************** */

// 위처럼 반복해서 해야하는 작업을 한 번에 작동시키려고 for문을 사용한다. 

/** ********************
for문(반복문) 안에 for문은 밖의 for문 과는 별개다.
박스 안에 박스를 넣는다고 그 둘 박스가 섞기는 게 아니다.
박스형식
여전히 구분이 존재한다. 독립, 별개의 것.
외부 for문의 [i] =x 내부 for문의 [i]
for(let i = 0; i < 10; i++){ 
    for(let i = 0; i < 10; i++){
        console.log(`J${j}입니다.`)
    }
    console.log(`I${i}입.`)
}
******************** */

// 변수의 스코프(scope, 범위, 영역)
// let 키워드로 선언된 변수의 scope는 블록단위이다.
// *변수 선언 원칙 - 동일 이름 불가*
// but, scope가 다르다면 이름만 동일할 뿐 '영역이 다르기에' 가능.




for(let i = 0; i < menuItem.length; i++){

    // console.log(i)
    // console.log(menuItem[i])

    // 클릭 시 우선 전체에 대한 `active`클래스 제거.
    menuItem[i].addEventListener(`click`, () => {
        for(let re = 0; re < menuItem.length; re++){
            menuItem[re].classList.remove(`active`)
        }
        // active 클래스 추가
        menuItem[i].classList.add(`active`)        
    })
}


