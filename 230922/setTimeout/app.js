// console.log(`qkfr`)

const title = document.getElementById(`text`)
// 콘솔에 'text 내용 추출 후(.textContent)' 표기
// console.log(title.textContent)

// title.textContent 내용을 배열로 변환
// split('기분이 되는 문자')메소드 : 기분이 되는 문자를 기준으로 쪼개 배열로 변환, '' 그냥 따옴표를 넣으면 글자 단위로 쪼갠다.
const textArray = title.textContent.split('')
// console.log(textArray)





// createElement(`태그이름`) : 태그를 생성하는 메소드
const p = document.createElement(`p`) 
// 생성한 p 태그 안에  title의 텍스트 내용 할당
p.textContent = title.textContent
console.log(p)
// body의 맨마지막 부분에 생성한 p태그 추가
document.body.append(p)




// title의 택스트 내용을 지워준다.(메모리에 남아있기에 문제x)
title.textContent = ''
p.textContent = ''


for(let i=0; i < textArray.length; i++){
    setTimeout(() => {
        // console.log(textArray[i])
       title.textContent += textArray[i]
       p.textContent += textArray[i]
    },500*i)
    
    
}



