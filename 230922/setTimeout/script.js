// 비동기 처리기!
// setTimeout : 지연된 시간 후에 실행되는 함수
// setTimeout(합수, 시간: 1s = 100ms)
// setTimeout(() => {
//     console.log(`첫번째`)
// }, 1000)
// setTimeout(() => {
//     console.log(`두번째`)
// }, 3000)
// setTimeout(() => {
//     console.log(`세번째`)
// }, 500)

// let index = 0;
// // 1초 뒤에 index값을 변경해서 console로 출력
// setTimeout(() => (
//     console.log(index+1)
// ), 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = `red`
// })



// setInterval : 정해진 시간마다 반복 실행하는 비동기 함수
// // setInterval(함수, 시간)
// let time = 1000;
// setInterval(() => {
//     console.log(`나는 ${time}ms마다 반복합니다.`)
// },time)

// let index = 0;


// setInterval(() => {
//     index++
//     document.body.textContent = index
//     console.log(index)
// }, 1000)


// setInterval(() => {
//     document.body.style.backgroundColor = `red`
// }, 1000);
// setInterval(() => {
//     document.body.style.backgroundColor = `blue`
// }, 2000);
