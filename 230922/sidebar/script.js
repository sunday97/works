// console.log(`script.js running...`)



const button = document.getElementById(`trigger`)
// console.log(button)
const sidebar = document.getElementById(`sidebar`)
// console.log(sidebar)


button.addEventListener(`click`, () => {
    if(sidebar.classList.contains(`fold`) == false){
        sidebar.classList.add(`fold`)
    } else {
        sidebar.classList.remove(`fold`)
    }

    text.classList.add(`overly`)
})

