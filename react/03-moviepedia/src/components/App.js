import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { useState, useEffect } from "react";
import { getDatas } from "./firebase";

const LIMIT = 5;
// 상수의 변수는 대문자!

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({}); // lastQuery를 담을 state

  // console.log(items);
  console.log(order);

  // 찐 태그가 있는 곳이 아니라 함수를 굳이 여기서 선언하는 이유는 주요 기능을 여기에 모아서 "관리하기 용의"하기 위해서이다.
  // 연결만 잘해놓으면 여기서 관리할 수 있느니까 용의하다.
  const handleDelete = (id) => {
    // alert(id);
    // items 에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거
    const nextItems = items.filter((item) => item.id !== id);
    // 그래야 리액트가 렌더링을 실행하니까.
    // 단 이 경우엔 렌더링 범위는 App()부분이라 새로고침하면 mock.json가 다시 불려와서 다시 나타난다. 진짜 파일(서버)에 있는 걸 삭제한 것이 아니다.
    setItems(nextItems);
  };

  // const hanleLoadClick = async () => {
  //   // console.log(await getDatas("movie"));
  //   // 구조분해할당
  //   const { reviews } = await getDatas("movie");
  //   // 만약 변수를 바꾸고 싶으면 {reviews:result} , 만약 디폴트값(기본값)을 주고 싶다? {result2 = "blue"}
  //   // console.log(reviews);
  //   setItems(reviews);
  // };
  const handleLoad = async (lq) => {
    const { reviews, lastQuery } = await getDatas("movie", order, LIMIT, lq);
    // console.log(lq); // 최초에는 undefined 나온다. 그걸 이용해 함수 기능을 나눈다.
    setLq(lastQuery);
    // console.log(reviews);
    // 스테이트함수는 파라미터를 콜백으로도 받을 수 있는데 그 콜백함수의 파라미터로 해당 함수의 전값을 받을 수 있다.
    // setItems((prevItems) => console.log(prevItems));

    if (lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
      /// ...reviews해주는 이유는 reviews 자체가 [{},{}] 처럼 []로 감싸여있잖아... 안 풀러주면 [[{},{}]]처럼  []가 이중으로 이렇게 되겠지??
    }
  };

  const handleLoadMore = () => {
    handleLoad(lq);
  };

  // 아래처럼 하면 랜더링할때마다 함수가 실행되서 무한으로 setItems이 실핼되어 무한랜더링...
  // hanleLoad();
  // 그걸 해결하기 위해
  // useEffect!!!
  // useEffect는 arguments 로 콜백함수와 배열을 넘겨준다.
  // []은 dependency list 라 하는데
  // 위의 hanleLoad 무한루프를 처리해야 하는데
  // 리액트는 [] 안에 있는 값들을 앞에서 기억한 값이랑 비교해서
  // 다른 경우에만 실행함(그 전에는 콜백함수를 등록만 해놓음)
  useEffect(() => {
    handleLoad(); // 얘가 초기 화면을 뿌려주는 얘야.
  }, [order]); // [] 안에 order를 넣은 이유는 order값이 변할 때마다 창을 새롭게 렌더링하기 위해서야.

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
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  // 정렬방법이 많다....

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={items} onDelete={handleDelete} />
      {/* <button onClick={hanleLoadClick}>불러오기</button> */}
      <button onClick={handleLoadMore}>더보기</button>
    </>
  );
}

export default App;
