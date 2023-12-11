import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import State from "./State.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "MacBook";
const price = 2000;
root.render(
  // <></> : 프레그먼트, Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화할 수 있습니다.
  // <Fragments></Fragments> =>  <></> 축약가능
  <>
    <App />
    {/* <State /> */}
  </>
);
// root.render(<App productName={product} productPrice={price} />);
// root.render(
//   <div>
//     <h1>나만의 {product} 주문하기</h1>
//   </div>
// );
