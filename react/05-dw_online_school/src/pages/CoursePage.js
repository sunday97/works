import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";

function CoursePage() {
  const { course } = useLocation().state;
  //   useLocation()를 log치면 안에 CourseItem에 Link의 state로 넘겨준 state값이 들어가 있다.
  // 그걸 구조분해할당함
  //   debugger
  //   const props = useParams();
  //   console.log(props); // 메인에서 적어준 코스슬러그를 통해 가져올 수 있다. 그걸 통해서 db에서 통신으로 가져올 수 있겠지? 즉 코스를 state로 전달받지 않았을 때.
  return (
    <>
      <div>
        <Container>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1>{course.title}</h1>
          <Button variant="round">+ 코스담기</Button>
          <p>{course.summary}</p>
        </Container>
      </div>
      <Container>
        {course.topics.map(({ topic }) => (
          <Card key={topic.slug}>
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
