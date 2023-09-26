// console.log(`running...`);

const dataList = document.querySelectorAll('[data-counter]')
// console.log(dataList);

// 반복문을 이용해서 dataList 안에 있는 date-counter 값을 콘솔로 출력
// html : data-counter , js : element.dataset.counter
for(let i = 0;i < dataList.length;i++) {
    // console.log(dataList[i]);
    // console.log(dataList[i].dataset.counter);
    // for문 안에서는 매번 생성되기에 const(정수) 사용 가능
    const target = dataList[i].dataset.counter;
    const timerText = dataList[i].querySelector(`.timer`)
    // 동시에 200보에 끝나는 보폭 구하기
    const step = Math.floor(target / 200)
    console.log(step);
    let index = 0;

    
    setInterval(() =>{
        if(index < target) {
            // 동시에 끝나도록 증가
            index = index + step
            // console.log(index);  
            timerText.textContent = index
        }
    }, 1)
 
}