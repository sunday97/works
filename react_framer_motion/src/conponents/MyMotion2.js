import { motion } from "framer-motion";
import * as React from "react";
import "./MyMotion1.css";

const boxVariants = {
  start: { opacity: 1, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", delayChildren: 0.3, staggerChildren: 0.2 },
  },
};
const circleVariants = {
  // 근데 크롬브라우저로 하면 애니메이션이 밀린다? 끝부분만 보인다? 암튼 그렇다. 파이어폭스에선 잘 돌아간다.
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring" } },
};

export function MyMotion2() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box2"
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          {/* 부모자식관계에서 같은 키값(상태의 이름)을 가지고 있을 때 자식의 경우 생략이 가능함 */}
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
        </motion.div>
      </div>
    </>
  );
}
