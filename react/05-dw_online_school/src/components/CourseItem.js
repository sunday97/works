import Card from "./Card";
import CourseIcon from "./CourseIcon";
import Tags from "./Tags";
import styles from "./CourseItem.module.css";
import getCourseColor from "../utils/getCourseColor";
import { Link } from "react-router-dom";

const DIFFICULT = ["입문", "초급", "중급", "고급", "-"];

function CourseItem({ course }) {
  //   const difficuly = DIFFICULT[course.difficulty || 0];
  const difficuly = DIFFICULT[course.difficulty || 4];

  const courseColor = getCourseColor(course.code);
  const thumbStyle = {
    borderColor: courseColor,
  };

  return (
    <Card className={styles.courseItem}>
      <div className={styles.thumb} style={thumbStyle}>
        <CourseIcon photoUrl={course.photoUrl} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {/* Link의 state 넘기기 */}
          <Link to={`/courses/${course.slug}`} state={{ course }}>
            {course.title}
          </Link>
        </h2>
        <p className={styles.description}>{course.summary}</p>
        <div>
          <Tags values={[course.language, difficuly]} />
        </div>
      </div>
    </Card>
  );
}

export default CourseItem;
