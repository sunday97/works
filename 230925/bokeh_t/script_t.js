// console.log(`run`);

const app = document.getElementById(`app`)
console.log(app);

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// for문 안에 들어갈 것들을 함수처리, 후에 수정 및 복사 간편.
const addBokeh = () => {
    // for문 안에서 만들어져야 함. 그래야 다수 생성.
    const bokeh = document.createElement(`div`)
    const size = randomGenerator(50, 120)

    bokeh.style.left = randomGenerator(-10, 100) + `%` //0~100%
    bokeh.style.top = randomGenerator(-10, 100) + `%` //0~100%
    bokeh.style.animationDelay = randomGenerator(1, 10) + `s`
    bokeh.style.animationDuration = randomGenerator(10, 30) + `s`
    bokeh.style.width = size + `px`
    bokeh.style.height = size + `px`
    bokeh.style.backgroundColor = `hsl(${randomGenerator(0, 360)}, ${randomGenerator(50, 60)}%, 50%)`
    bokeh.style.filter = `blur(${randomGenerator(0, 1)}px)`

    bokeh.classList.add(`bokeh`)
    app.append(bokeh)

}

for (let i = 0; i < 90; i++) {
    addBokeh()
}

