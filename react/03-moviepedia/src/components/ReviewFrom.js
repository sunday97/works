import { useState } from "react";

function ReviewFrom() {
  // const [title, setTitle] = useState("")
  // const [rating, setRating] = useState(0)
  // const [content, setContent] = useState("")
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  //   HTML에선 변수로 요소를 지정해서 이용했지만 react에선 이벤트를 연결하고 그 이벤트 중인 이벤트객체를 이용해서 타겟팅한다.
  // 예시) document.quarySelecter(".title").value 와 e.target 가 같다는 것이다.
  //   const handleTitleChange = (e) => {
  //     // console.log(e.target.value);
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setValues((values.name = value));
  };

  return (
    // 폼 태그 안에서 <button type="submit">을 누르면 form태그 전체가 날라가는 것이라 handleSubmit을 form태그에 달아주는 게 맞다.
    <form className="ReviewFrom" onSubmit={handleSubmit}>
      <input type="file" accept="image/png, image/jpeg" />
      <input
        type="txet"
        name="name"
        value={values.title}
        onChange={handleChange}
      />
      <input
        type="txet"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewFrom;
