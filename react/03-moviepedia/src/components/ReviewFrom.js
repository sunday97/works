import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgUrl: null,
};

function ReviewFrom({ onsbumit, onSubmitSuccess }) {
  // const [title, setTitle] = useState("")
  // const [rating, setRating] = useState(0)
  // const [content, setContent] = useState("")
  const [values, setValues] = useState(INITIAL_VALUES);

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

  // if문 방식 - 당장은 사용할 수 있지만 추후에 수정사항이 생길 때 많은 수정을 요구함
  // const handleChange = (e) => {
  //   let name, value;
  //   if (e.files !== null) {
  //     value = e.target.files[0];
  //   } else {
  //     value = e.target.value;
  //   }
  //   name = e.target.name;
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    const { name, value } = e.target;
    handleChange(name, value);
    // console.log(name);
    // console.log(value);
    //  배열에서도 그랬듯이 객체를 수정할 때 speard문법을 사용한다.✨

    // setValues((prevValues) => ({
    //   ...prevValues,
    //   [name]: value,
    // }));
    // values.name 이 아니라 [name] 으로 사용하는 이유는 .name은 name이란 변수를 말하는 것으로 인식할 수있기에 []로 사용한다.(???)
    // {}를 ()로 한 번 감싸는 이유는 화살표 함수의 생략에서 return과 중괄호를 지웠을 때 안의 객체{}를 넘길 때는 ()로 묶어준다.
    // 원본예시
    // setValues((prevValues) => {
    //   return { ...prevValues, value };
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // tryCatch-finally 구문!!!
    try {
      const { review } = await onsbumit("movie", values);
      onSubmitSuccess(review);
    } catch (error) {
      return;
    } finally {
    }
    setValues(INITIAL_VALUES);
  };

  return (
    // 폼 태그 안에서 <button type="submit">을 누르면 form태그 전체가 날라가는 것이라 handleSubmit을 form태그에 달아주는 게 맞다.
    <form className="ReviewFrom" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewFrom;
