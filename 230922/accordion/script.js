// console.log(`running...`)

const icon = document.querySelectorAll(`.icon`)
const listItem = document.querySelectorAll(`.list-item`)
// console.log(icon)
// console.log(listItem)

// for(let i = 0; i < icon.length; i++) {
//     icon[i].addEventListener(`click`, () => {
        
//         for(let i = 0; i < icon.length; i++){
//             listItem[i].classList.remove(`selected`)
//         }

//         listItem[i].classList.add(`selected`)

//     })
// }

// for(let i = 0; i < icon.length; i++) {
//     listItem[i].addEventListener(`click`, () => {
        
//         for(let i = 0; i < icon.length; i++){
//             listItem[i].classList.remove(`selected`)
//         }

//         listItem[i].classList.add(`selected`)

//     })
// }

/** **************************************
 *  forEach를 사용할 경우
 * (변수이름).forEach ((변수) => {함수})
 */

listItem.forEach(Xx => {
    Xx.addEventListener(`click`,() => {
        listItem.forEach(Yy => Yy.classList.remove(`selected`))
        Xx.classList.toggle(`selected`)
    })
})