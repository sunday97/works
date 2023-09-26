// console.log(`running...`);

const input = document.getElementById(`add-todo`)
const addButton = document.querySelector(`.add-button`)
const list = document.getElementById(`list`)
// console.log(input);
// console.log(addButton);
// console.log(list);

// // input창에 사용자가 특정 키를 입력 했을 때 실행
input.addEventListener('keydown', (e) => {
    // console.log(e)
    // console.log(e.key);
    if(e.key === 'Enter'){
        addListItem()
    }
})

// 추가 버튼을 눌렸을 때 실행
addButton.addEventListener('click', () => {
    console.log(input.value)
    // list에 input.value를 HTML작성형태로 li요소에 담아서 추가
    // innerHTML, textContent, innerText

    // 1번방법
    // list.innerHTML += `<li class="list-item">${input.value}<button class="list-delete">&#x2716</button></li>`
    
    // 2번방법
    // const li = document.createElement(`li`)
    // li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    // li.classList.add(`list-item`)
    // list.append(li)

    // 추가 후 창 비움(수직방향진행에 따른 방법)
    // input.value = '';
    // 인풋에 진행 후 포커스를 주기
    // input.focus();

    addListItem()

})

// list에 할 일을 추가하는 함수
const addListItem = () => {
    // 사용자가 빈값을 입력 시 경고창 출력
    if(input.value.length === 0){
        return alert(`내용을 입력하세요`)
    }
    // li 요소 생성
    const li = document.createElement(`li`)
    // li에 사용자의 입력값과 버튼 태그 추가
    li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    li.classList.add(`list-item`)
    list.append(li)

    // input 값을 삭제
    input.value = '';
    // input에 focus 활성화(사용자가 입력할 수 있게 대기)
    input.focus();

    // save local storage
    saveList(list.innerHTML)
}


list.addEventListener(`click`, (e) => {
    // event.currentTarget : 이벤트가 걸려있는 해당 요소
    // event.target : 클릭하는 요소
    console.log(e.target)
    console.log(e.target.tagName)

    // li 요소를 클릭했을 때
    if(e.target.tagName === 'LI'){
        // check 클래스 토글
        e.target.classList.toggle(`checked`)
        // 현재 체크상태 local storage 저장
        saveList(list.innerHTML)
    }

    // 삭제버튼 눌렀을 때
    if(e.target.tagName === 'BUTTON'){
        // 삭제 버튼의 부모를 삭제(li요소 삭제)
        e.target.parentElement.remove()
        // 현재 삭제 상태 local storage 저장
        saveList(list.innerHTML)
    }
})

// Local Storage에 문자열 담기
const saveList = (list) => {
    // localstorage에는 JSON형태로 저장
    // 로컬스토리지에 todo라는 이름으로 저장
    // stringify로 상태를 변환해서 저장
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadlist = () => {
    // 로컬스토리지에 'todo'라는 이름으로 값을 가져오고
    // 상태를 html 요소로 사용할 수 있도록 변환
    const getList = JSON.parse(localStorage.getItem(`todo`))
    // 변환한 값을 innerHTML로 list에 추가
    list.innerHTML = getList
}

// DOMContectLoaded : DOM이 그려지고 난 뒤
// load : DOM도 그려지고, 이미지와 같은 요소들도 모두 로드 되었을 때
document.addEventListener(`DOMContectLoaded`, loadlist())