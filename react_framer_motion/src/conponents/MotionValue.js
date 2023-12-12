import {
  motion,
  transform,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import "./MotionValue.css";

export function MotionValue() {
  //   const x = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const background = useTransform(
    // 변화하는 또는 변화시킬 값
    scrollYProgress,
    // 0~1 사이(레인지)
    [0, 1],
    // 자동으로 계산해서 그 중간값을 계속해서 변화!!
    [
      "linear-gradient(90deg, rgb(0,210,238), rgb(0,83,238))",
      "linear-gradient(90deg, rgb(0,238,155), rgb(238,178,0))",
    ]
  );
  const scaleY1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scaleY2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const scaleY3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scaleY4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scaleY5 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  //   useTransform(scrollYProgress, [0, 0.2, 0.4](레인지값), [0, 1, 0](변화시킬값));
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 1, 1], [0, 1, 1]);

  return (
    <>
      {/* <motion.div className="container" style={{ background : background }}> 인데 같은 값이라 생략했다.   */}
      <motion.div className="container" style={{ background }}>
        <div className="wrapper">
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY1, opacity: opacity1 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY2, opacity: opacity2 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY3, opacity: opacity3 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY4, opacity: opacity4 }}
          />
          <motion.div
            className="scrollBar"
            style={{ scaleY: scaleY5, opacity: opacity5 }}
          />
        </div>
      </motion.div>
    </>
  );
}
