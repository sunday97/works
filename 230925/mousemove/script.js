console.log(`running....`);

const dot = document.querySelector(`.dot`)
console.log(dot);


window.addEventListener(`mousemove`,(event) => {
    // console.log(`x좌표 : ${event.clientX}, y좌표 : ${event.clientY}`);
    // 기준이 왼쪽위 모서리라 그것을 중앙으로 옮김.
    // console.log(`dot의 wieth는 : ${dot.clientWidth / 2}`);
    // console.log(`dot의 height는 : ${dot.clientHeight / 2}`);
    requestAnimationFrame(() => {
        mouseMove(event)
    })
})

const mouseMove = (event) => {
    dot.style.top = event.clientY - (dot.clientHeight / 2) + `px`;
    dot.style.left = event.clientX - (dot.clientWidth / 2) + `px`;
}

window.addEventListener(`click`, () => {
    const span = document.createElement(`span`)
    span.classList.add(`bubble`)
    dot.append(span)
    
    // span 요소를 1초 뒤에 삭제
    setTimeout(() => {
        //  요소를 삭제하는 메소드
        span.remove()
    },1000)

})


