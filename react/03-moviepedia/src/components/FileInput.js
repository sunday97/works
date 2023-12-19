import { useEffect, useRef, useState } from "react";

function FileInput({ onChange, name, value }) {
  //  FileInput({onChange}) 구조분해할당방식으로 받는다.

  //   useRef✨
  const inputRef = useRef();

  const [preview, setPreview] = useState({});

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.files);
    const nextFile = e.target.files[0];
    // file은 value값이 없으니 객체로 넣어줘야 함. 그래서 함수를 2개로 나눠서 value값이 아닌 value파라미터로 넘겨주는 방식?
    onChange(name, nextFile);
  };

  useEffect(() => {
    // 값이 없을 수도 있기 때문에
    // console.log(inputRef);  // ref를 쓴 input 태그가 객체에 담겨서 선택됨!!!
    // ObjetURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    if (!value) return; // !null => true
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div>
      {/* img 태그는 jsx에선 꼭 div에 넣어서 서술해야 함. */}
      <img alt="이미지미리보기" src={preview} />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FileInput;
