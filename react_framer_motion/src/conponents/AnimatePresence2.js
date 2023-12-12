import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import "./AnimatePresence.css";
import { useState } from "react";

// Variants를 App()밖에 쓰는 이유는 다른 곳에서도 쓸 수 있기에. 보통은 아예 Variants.js를 만들어서 사용하기도 한다.
const boxVariants = {
  start: { opasity: 0, scale: 0 },
  end: {
    opasity: 1,
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring" },
  },
  exit: { opasity: 0, scale: 0, rotateZ: -360 },
};

export function MyAnimatePresence2() {
  //   con showing = false;
  const [showing, setShowing] = useState(false);
  // useAnimationControls를 사용하는 경우!!!
  const control = useAnimationControls();
  console.log(showing);

  function onClick() {
    if (showing) {
      control.start("exit");
    } else {
      control.start("end");
    }
    setShowing((showing) => !showing);
  }
  return (
    <>
      <div className="container">
        {/* <AnimatePresence>~</AnimatePresence> 사이에 있는 것들은 exit가 있으면 바로 메모리에 나타났다 사라지는 게 아니라 exit 를 실행하고 실행한다. */}
        <AnimatePresence>
          <motion.div
            className="box"
            variants={boxVariants}
            initial="start"
            animate={control}
          ></motion.div>
        </AnimatePresence>
        <button onClick={onClick}>Click Me</button>
      </div>
    </>
  );
}
