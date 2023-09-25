console.log(`running...`)
/** 
 * wrapper 에다가 snow를 추가해서 animation
*/

const wrapper = document.querySelector(`.wrapper`)
console.log(wrapper)

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



for(i = 0; i < 100; i++){
    
    const snow = document.createElement(`span`)
    // 눈송이의 weith값과 height값의 동일함을 위해 랜덤값은 변수에 담는다.
    const size = randomGenerator(3, 10)

    snow.classList.add('snow')
    snow.style.left = `${randomGenerator(0, 100)}%`
    snow.style.animationDuration = `${randomGenerator(0, 30)}s`
    snow.style.animationDelay = `${randomGenerator(0, 3)}s`
    snow.style.opacity = Math.random();
    snow.style.width = `${size}px`
    snow.style.height = `${size}px`
    snow.style.filter = `blur(${randomGenerator(1, 3)}px)`

    wrapper.append(snow)
    
}

