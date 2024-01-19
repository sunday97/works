import { Outlet } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function App() {
  // 1번
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 100);

  //   // 컴포넌트가 언마운트되면 clearInterval을 통해 타이머를 정리
  //   return () => clearInterval(intervalId);
  // }, []); // 빈 배열은 마운트 시에만 실행

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount >= 100) {
  //         clearInterval(intervalId);
  //         return prevCount;
  //       }
  //       return prevCount + 1;
  //     });
  //   }, 10);

  //   // 컴포넌트가 언마운트되면 clearInterval을 통해 타이머를 정리
  //   return () => clearInterval(intervalId);
  // }, []); // 빈 배열은 마운트 시에만 실행

  return (
    // <div className="App">
    //   <div>
    //     <h1>Count: {count}</h1>
    //   </div>
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
