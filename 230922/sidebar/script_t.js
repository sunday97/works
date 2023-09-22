/**
 * #sidebar : 사이드 바
 * #trigger : 버튼
 * overly : 오버레이
 */

// DOM : Document Object Model(HTML 구성요서)
// getElementById() : 아이디를 기반으로 DOM을 탐색
// querySelector() : 태그, 아이디, 클래스 등을 기반으로 단일요소 탐색.
// querySelectorAll() : 태그. 아이디. 클래스 드응ㄹ 기반으로 '복수'요소 탐색 - 유사 "배열" 형태로 결과 반환!
// Query = 질문

const sidebar = document.getElementById(`sidebar`); 
const trigger = document.getElementById(`trigger`);
const overly = document.querySelector(`.overly`);
console.log(sidebar)
console.log(trigger)
console.log(overly)

/**
 * trigger 클릭 시 sidebar 표출
 * ---------------------------
 * adEventListener(`이벤트이름`, 함수)
 */

// trigger.addEventListener('click', () => {
    // classList.contains(`클래스명`) : "클래스명"가 있는지 유무에 따라 true, false 값 반환
    // classList.add
    // classList.remove
    // classList.toggle(`클래스명`) : 클래스명 소유 판단, 추가제거
    // sidebar.classList.toggle('open')
// })

console.log(sidebar.classList.contains(`open`))

trigger.addEventListener(`click`, () => {
    if(sidebar.classList.contains(`open`)) {
        sidebar.classList.remove(`open`)
        trigger.textContent = `열기`
        overly.classList.remove(`open`)
    } else {
        sidebar.classList.add(`open`)
        trigger.textContent = `닫기`
        overly.classList.add(`open`)
    }
})

overly.addEventListener(`click`, () => {
    if(overly.classList.contains(`open`)){
        overly.classList.remove(`open`)
        sidebar.classList.remove(`open`)
        trigger.textContent = `열기`
    }
})