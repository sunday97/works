import { useState } from "react";

function State() {
  const [state, setState] = useState(0);

  // userState의 내부 구조...
  // let value;  // 리액트 내장함수에서 외부에 존재하는 정의만 된 value값(undefinded)

  // function useState(initialValue) {
  //   if (value === undefined) {
  //     value = initialValue;
  //   }

  //   const setState = (newValue) => {
  //     value = newValue;
  //   };

  //   return [value, setState];
  // }

  const onClickHandler = () => {
    console.log("click!!");

    setState(1);

    if (state === 1) {
      console.log("실행될까?");
    }
  };

  return <h1 onClick={onClickHandler}>state 테스트</h1>;
}

export default State;
