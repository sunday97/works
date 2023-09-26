console.log(`running...`);

const tabButton = document.querySelectorAll(`.tab-button`)
const tabItem = document.querySelectorAll(`.tab-item`)
// console.log(tabButton);
// console.log(tabItem);

// for(let i = 0; i < tabButton.length; i++) {
//     tabButton[i].addEventListener(`click`, () => {

//         for(let re = 0; re < tabButton.length; re++){
//             tabButton[re].classList.remove(`selected`)
//             tabItem[re].classList.remove(`show`)
//         }

//         tabButton[i].classList.add(`selected`)
//         tabItem[i].classList.add(`show`)
//     })

// }


tabButton.forEach((fE, index) => {
    fE.addEventListener(`click`, () => {
        tabButton.forEach((re, dex) => {
            // scope를 유의!
            re.classList.remove(`selected`),
            tabItem[dex].classList.remove(`show`)
        })
        fE.classList.add(`selected`)
        tabItem[index].classList.add(`show`)
    })
})

