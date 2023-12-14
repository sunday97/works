import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([mockItems]);
  const [order, setOrder] = useState("createdAt");

  // console.log(items);

  // 찐 태그가 있는 곳이 아니라 함수를 굳이 여기서 선언하는 이유는 주요 기능을 여기에 모아서 "관리하기 용의"하기 위해서이다.
  const handleDelete = (id) => {
    // alert(id);
    // items 에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거
    const nextItems = items.filter((item) => item.id !== id);
    // 그래야 리액트가 렌더링을 실행하니까.
    // 단 이 경우엔 렌더링 범위는 App()부분이라 새로고침하면 mock.json가 다시 불려와서 다시 나타난다. 진짜 파일(서버)에 있는 걸 삭제한 것이 아니다.
    setItems(nextItems);
  };
  // console.log(handleDelete);

  // sort 함수에 아무런 argument도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬된다.
  // ==> compareFunction이 생략될 경우, 배열의 모든 요소들은 문자열취급되며, 유니코트값순서대로 정렬된다.
  //  --> compareFunction이 있으면 문자취급이 안 된다는 말!
  // 그렇기 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름
  // [1,2,3,4,5,6,7,8] => 1,2 / 2,3 / 3,4 .... compareFunction 작동방식
  //  compareFunction 의 반환값 < 0 : a가 b보다 앞에 있어야 한다.
  // 반환값 == 0 : a와 b의 순서변경x
  // 반환값 > 0 : b가 a보다 앞에 있어야 한다.
  //  a - b : 오름차순, b - a : 내림차순
  // items.sort((a, b) => a - b);
  // console.log(items);

  // ...sort가 원본배열을 참조가 아니라 바꾸는 메소드였네?
  // const handleNewestClick = () => {
  // console.log(items);
  // const sortedItems = items.sort((a, b) => b.createdAt - a.createdAt);
  // console.log(sortedItems);
  // console.log(items);
  // setItems(sortedItems);
  // setItems(items.sort((a, b) => b.createdAt - a.createdAt)); // 위와 같은 말이다.
  // 그래서 이미 변한 값을 넣어봤자 같기에 변화가 없어서 리액트가 감지하지 못한다.
  // };

  // 새로운 방법 order사용
  // a.createAt = a[order] 라는 말이다.
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  // 정렬방법이 많다....

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button>불러오기</button>
    </>
  );
}

export default App;
