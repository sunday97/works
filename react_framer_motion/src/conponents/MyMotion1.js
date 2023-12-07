import { animate, motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  // variants로 사용할 때엔 객체형식에 특이하게 transition을 각각 붙여준다.
  // transition은 animate를 따라가네?
  phase1: { scale: 0, rotateZ: 0, transition: { type: "linear", delay: 3 } },
  phase2: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
};

export function MyMotion1() {
  return (
    <>
      <div className="container">
        {/* motion. 을 태그 앞에 붙여줘야 framer-motion 쓸 준비 됨 */}
        <motion.div
          className="box"
          // {{}} : 밖의 {}은 문자열이 아니라는 뜻이고, 안의 {}은 객체라는 뜻이다.
          // initial : 초기설정값, 시작값이 현재와 동일하다면 생략가능함.
          // initial={{ scale: 0 }}
          // // animate : 결과설정값
          // animate={{ scale: 1, rotateZ: 360 }}
          // // animate={{ borderRadius: "50%" }}
          // transition={{ type: "spring", delay: 1 }}

          // variants 사용
          variants={boxVariants}
          initial="phase2"
          animate="phase1"
        ></motion.div>
      </div>
    </>
  );
}
