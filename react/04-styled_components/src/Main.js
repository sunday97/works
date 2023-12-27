import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HelloStyled from "./components/01/HelloStyled";
import Nesting from "./components/02/Nesting";
import Practice1 from "./components/03/Practice1";
import Practice2 from "./components/04/Practice2";
// import App2 from "./components/App2";

// 스위치 케이스 문 과 유사하다. 나중에 복습해봐라.
// localhost300/ => 주소 naver.com 같은 느낌.
// localhost300
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/App2" element={<App2 />} /> */}
        {/* Route의 중첩으로 분기생성 */}
        <Route path="/" element={<App />}>
          <Route path="01" element={<HelloStyled />} />
          <Route path="02" element={<Nesting />} />
          <Route path="03" element={<Practice1 />} />
          <Route path="04" element={<Practice2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
