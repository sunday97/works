// import { MyMotion1 } from "./conponents/MyMotion1";
// import { MyMotion2 } from "./conponents/MyMotion2";
// import { MyMotion3 } from "./conponents/MyMotion3";
// import란 컴파일 과정에서 파일을 통째로 붙여넣기하는데 당연히 그곳에 물린 css 파일도 붙여넣기가 된다는 것이다!!!
// 그래서 react에선 css파일을 지양하고 styled conponents란 놈을 사용한다. 아직 배움 x
// import { Gesture } from "./conponents/Gesture";
import { Scroll } from "./conponents/Scroll";

function App() {
  return (
    <>
      {/* <MyMotion1 /> */}
      {/* <MyMotion2 /> */}
      {/* <MyMotion3 /> */}
      {/* <Gesture /> */}
      <Scroll />
    </>
  );
}

export default App;
