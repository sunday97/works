const data = [
    {title: `모래꽃`, url: `image/6.jpg`},
    {title: `카우BOY`, url: `image/7.jpg`},
    {title: `도심Tree`, url: `image/8.jpg`},
    {title: `브런치`, url: `image/9.jpg`},
    {title: `로맨스in파리`, url: `image/10.jpg`},
    {title: `무제`, url: `image/1.jpg`},
    {title: `무제2`, url: `image/2.jpg`}
]

// 1. list에 목록
const list = document.getElementById(`list`)
// console.log(list)
const image = document.getElementById(`image`)
const title = document.querySelector(`#title`)



for(let i = 0; i < data.length; i++) {
    // console.log(data[i])  //값확인
    // 반복해서 li요소에 tile 값을 담아줌
    list.innerHTML += `<li class="button">${data[i].title}</li>`
}

// button 클래스를 가진 요소들을 모두 가져옴
const buttons = document.querySelectorAll('.button') 
// console.log(buttons)

for(let i = 0; i < buttons.length; i++) {
    // 초기화
    // 첫번째 버튼에 check 클래스 추가
    buttons[0].classList.add(`check`)
    // 첫번째 데이터 타이틀을 figcaption에 할당
    title.textContent = data[0].title

    // console.log(buttons[i])
    buttons[i].addEventListener(`click`, () => {
        // i번째 데이터의 url 출력
        // console.log(data[i].url)
        // 이미지 태그의 src 속성에 data[i].url 값 할당
        image.src = data[i].url
        // title 값에 대한 data[i].title
        title.textContent = data[i].title
        // 모든 버튼에서 check 클래스 제거
        for(let i = 0; i  < buttons.length; i++){
            buttons[i].classList.remove(`check`)
        }
        // 클릭한 버튼에서 check 클래스 추가
        buttons[i].classList.add(`check`)
    })
}



