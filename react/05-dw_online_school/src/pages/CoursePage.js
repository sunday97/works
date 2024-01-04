import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";
import styles from "./CoursePage.module.css";
import getCourseColor from "./../utils/getCourseColor";

function CoursePage() {
  const { course } = useLocation().state;
  //   useLocation()를 log치면 안에 CourseItem에 Link의 state로 넘겨준 state값이 들어가 있다.
  // 그걸 구조분해할당함
  //   debugger
  //   const props = useParams();
  //   console.log(props); // Main.js에서 적어준 코스슬러그url를 통해 가져올 수 있다. 그걸 통해서 db에서 통신으로 가져올 수 있겠지? 즉 코스를 state로 전달받지 않았을 때.

  const courseColor = getCourseColor(course?.code);
  // optional channing
  const heaerStyle = {
    borderTopColor: courseColor,
  };
  return (
    <>
      <div className={styles.header} style={heaerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round">+ 코스담기</Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card key={topic.slug} className={styles.topic}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
