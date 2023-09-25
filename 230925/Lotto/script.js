// script.js
console.log(`running...`)

// min : 최솟값, max : 최댓값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(randomNunber(1, 45))

const result = document.getElementById(`result`)
// console.log(result)
const button = document.getElementById(`generator`)
// console.log(button)
const li = document.querySelectorAll(`#result > li`)
// console.log(li)



// 로또 번호 담을 배열
let lottoNumber = [];
// 배열에 요소를 추가
// lottoNumber.push(randomNumber(1, 45))



button.addEventListener(`click`, () => {

    // 로또번호생성 버튼 비활성화
    button.classList.add(`processing`)
    button.textContent = `번호생성중`

    // 로또번호 초기화 : 로또 길이 체크 후 비워주기
    if (lottoNumber.length > 0) {
        lottoNumber = [];
    }


    // lottoNumber.length < 6 : 6개가 나올 때 까지 무한 반복한다.
    for (let i = 0; lottoNumber.length < 6; i++) {

        // 배열 중에 '어떤값'이 존재하는 유뮤에 따라 ture, false 반환
        // if(lottoNumber.includes(lottoNumber) === false) {
        // lottoNumber.push(randomNumber(1, 45))
        // }

        // ---------------------------------

        // // random 변수에 난수 생성한 값 할당.
        const random = randomNumber(1, 45)
        // // lottNumber 내부에 random과 일치하는 값이 있는 있는지 ture/false
        const isEntry = lottoNumber.includes(random)
        // console.log(isEntry)
        // !(not)값을 뒤집어준다.
        // isEntry === true, !isEntry === false
        // if 축약문 => (조건) ? (맞을경우) : (아닐경우)
        !isEntry ? lottoNumber.push(random) : ''
        // console.log(lottoNumber)
        // console.log(lottoNumber[i])

    }

    // 오름차순 정렬
    lottoNumber = lottoNumber.sort((a, b) => a - b)
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    // 처리 속도 변수
    let timer = 300;

    // 로또번호를 요소에 추가하는 반복문
    for (let i = 0; i < lottoNumber.length; i++) {
        setTimeout(() => {
        li[i].textContent = lottoNumber[i]
    } ,timer*i)
    }

    setTimeout(() => {
        button.classList.remove(`processing`)
        button.textContent = `로또번호생성`
    }, timer*lottoNumber.length)

})






