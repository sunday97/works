console.log(`bokeh`)

const wrapper = document.querySelector(`.wrapper`)
// console.log(wrapper)

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for(i = 0; i < 75; i++){
    const bokeh = document.createElement(`span`)

    bokeh.classList.add(`bokeh`)
    bokeh.style.left = `${randomGenerator(-10, 100)}%`
    bokeh.style.top = `${randomGenerator(-10, 100)}%`
    bokeh.style.backgroundColor = `rgb(${randomGenerator(1, 255)}, ${randomGenerator(1, 255)}, ${randomGenerator(1, 255)} )`
    bokeh.style.animationDuration = `${randomGenerator(5, 30)}s`
    bokeh.style.animationDelay = `${randomGenerator(0, 5)}`
    bokeh.style.filter = `blur(${randomGenerator(0, 5)}px)`
    // 빛의 삼원색, 겹침이 더해질 수록 백색으로 표시
    bokeh.style.mixBlendMode = `screen`
    
    wrapper.append(bokeh)
}