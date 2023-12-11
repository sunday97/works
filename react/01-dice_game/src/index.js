import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import State from "./State.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "MacBook";
const price = 2000;
root.render(<App />);
// root.render(<State />);
// root.render(
//   <div>
//     <h1>나만의 {product} 주문하기</h1>
//   </div>
// );
