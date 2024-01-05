import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";
import styles from "./CoursePage.module.css";
import getCourseColor from "./../utils/getCourseColor";
import { useEffect, useState } from "react";
import { getData, updateDatas } from "../api/firebase";

function CoursePage() {
  // useLocation()을 넘겨주는 위치는 CourseItem이다.
  const props = useLocation();
  // const { course } = props.state;
  const [course, setCourse] = useState();
  const { pathname } = props;
  //   useLocation()를 log치면 안에 CourseItem에 Link의 state로 넘겨준 state값이 들어가 있다.
  // 그걸 구조분해할당함
  //   debugger
  //   const props = useParams();
  const { courseSlug } = useParams();
  //   console.log(courseSlug);
  //   console.log(props); // Main.js에서 적어준 코스슬러그url를 통해 가져올 수 있다. 그걸 통해서 db에서 통신으로 가져올 수 있겠지? 즉 코스를 state로 전달받지 않았을 때.

  const navigate = useNavigate();
  const courseColor = getCourseColor(course?.code);
  // optional channing
  const heaerStyle = {
    borderTopColor: courseColor,
  };

  const handleAddWishListClick = async () => {
    // alert("코스 담기 클릭");
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
      const result = await updateDatas("member", member.docId, course, {
        type: "ADD",
        fieldName: "courseList",
      });
      if (result) navigate("/wishlist");
    } else {
      alert("로그인을 해주세요.");
      // 현 주소 넘겨주기
      navigate("/login", { state: pathname });
    }
  };

  const handleLoad = async () => {
    const result = await getData("courses", "slug", "==", courseSlug);
    setCourse(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div className={styles.header} style={heaerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course?.photoUrl} />
          <h1 className={styles.title}>{course?.title}</h1>
          {/* <Button/>컴포넌트에 프롭으로 전달하지 않고 바로 onClick을 사용할 수 있는 이유는 <Button/>에 {...restprops}가 꼿혀있느기 때문이다.  */}
          <Button variant="round" onClick={handleAddWishListClick}>
            + 코스담기
          </Button>
          <p className={styles.summary}>{course?.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course?.topics.map(({ topic }) => (
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
