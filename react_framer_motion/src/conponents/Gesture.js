import "./Gesture.css";
import { motion } from "framer-motion";
// react가 제공하는 함수, 컴포냐 함수냐는 안에 JSX가 들어있냐 마냐의 차이다.
import { useRef } from "react";

const gestureVariant = {
  hover: {
    scale: 1.2,
    rotateZ: 90,
  },
  tap: {
    scale: 0.8,
    rotateZ: -90,
    borderRadius: "50%",
  },
  drag: {
    backgroundColor: "rgb(46,204,113)",
  },
  end: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "50%", "20%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export function Gesture() {
  // useRef는 리액트의 후크(hook)중 하나로서
  // 1) 상태저장을 하되 화면렌더링을 발생시키지않을 목적으로 사용함.
  // 2) real DOM의 객체요소에 직접 접근하기 위해 사용함.(react는 가상 DOM을 사용한다)
  const biggerBoxRef = useRef();
  return (
    <>
      <div className="container">
        <div className="biggerBox" ref={biggerBoxRef}>
          {/* DRAG */}
          {/* <motion.div className="box" drag dragSnapToOrigin></motion.div> */}
          {/* HOVER */}
          <motion.div
            className="box"
            drag
            // dragConstraints: {공간지정 혹은 공간이 될 주소지정} ==>드래그제한
            dragConstraints={{ top: -225, left: -425, right: 424, bottom: 225 }}
            // dragConstraints={biggerBoxRef}
            // Ref를 사용하는 이유는 animetion이란 놈은 리소스를 많이 잡아먹는 작업인데
            // React는 가상DOM을 그려서 그걸 realDOM에 넣는 흐름인데 그럼 작업이 2번 들어간다는 것이다.
            // 안정성에선 장점이 있지만 무거운 작업도 2배라는 점이기에
            // 그걸 해결하고자 일부 작업(like animetion)은 직접 realDOM에 접속하여 갱신하는 것이다.
            variants={gestureVariant}
            whileHover="hover"
            whileTap="tap"
            whileDrag="drag"
            animate="end"
          ></motion.div>
        </div>
      </div>
    </>
  );
}
