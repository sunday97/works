import { motion } from "framer-motion";
import * as React from "react";
import "./MyMotion1.css";

// React에서 keyFrame과 관련된 속성
const keyFrameVariants = {
  end: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "50%", "20%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      // duration을 100%로 했을 때
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export function MyMotion3() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={keyFrameVariants}
          animate={"end"}
        ></motion.div>
      </div>
    </>
  );
}
