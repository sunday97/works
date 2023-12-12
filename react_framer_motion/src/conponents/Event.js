import { motion } from "framer-motion";

export function Event() {
  function onUpdate(latest) {
    console.log(latest.x);
  }
  function onStart() {
    console.log("Animation Started");
  }
  function onComplete() {
    console.log("Animation Completed");
  }

  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          animate={{ x: 400 }}
          //   '크롬이슈'로 딜레이가 붙어있어야 한다.
          transition={{ delay: 1 }}
          // 진행중
          // onUpdate={onUpdate}
          // 시작
          onAnimationStart={onStart}
          // 끝
          onAnimationComplete={onComplete}
        ></motion.div>
      </div>
    </>
  );
}
