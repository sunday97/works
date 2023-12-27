import { useEffect, useRef, useState } from "react";
import resetImg from "../assets/ic-reset.png";
import "./FileInput.css";
import placeholderImg from "../assets/preview-placeholder.png";

function FileInput({ onChange, name, value, initialPreview }) {
  // console.log(initialPreview);

  //  FileInput({onChange}) 구조분해할당방식으로 받는다.

  //   useRef✨
  const inputRef = useRef();
  // console.log(inputRef.current);

  const [preview, setPreview] = useState(initialPreview);

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.files);
    const nextFile = e.target.files[0];
    // file은 value값이 없으니 객체로 넣어줘야 함. 그래서 함수를 2개로 나눠서 value값이 아닌 value파라미터로 넘겨주는 방식?
    onChange(name, nextFile);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    // console.log(value);
    // 값이 없을 수도 있기 때문에
    // console.log(inputRef);  // ref를 쓴 input 태그가 객체에 담겨서 선택됨!!!
    // ObjetURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    if (!value) return; // !null => true
    // ObjetURL만들면 웹 브라우저에 메모리를 할당한다. 할당 이후에는 해제를 해줘야 메모리 낭비 방지할 수 있다.
    // useEffect 에서는 사이드 이펙트(내부가 아닌 외부에 무언가가 변경되었다!!)를 정리하는 기능을 제공한다.
    // 리턴을 해줄 때 정리하는 함수를 리턴해주면 사이드 이펙트를 정리할 수 있다.
    const nextPreview = URL.createObjectURL(value); // URL.createObjectURL의 파라미터는 blob, MediaSourceObject, null 타입 데이터가 들어와야 한다. 문자열x
    setPreview(nextPreview);

    // 디펜던시 리스트 값이 바뀌면 새로 콜백을 실행하는데 이 전에 리액트는 앞에서 리턴한 정리 함수를 실행해서 사이드 이펙트를 정리한다.
    // 재렌더링 => useEffect => 그 안에 있는 return 함수 기억 => 사용자 파일 변경 되면 => value값 변경으로 인한 useEffect 함수 실행 및 골백함수 실행 => 앞에 기억해뒀던 return함수 실행
    //  (앞에서 만들어진 사이드 이펙트가 더 이상 쓸모없어졌기 때문에)
    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className="FileInput">
      {/* img 태그는 jsx에선 꼭 div에 넣어서 서술해야 함. */}
      <img
        className={`FileInput-preview ${preview ? "selected" : ""}`}
        alt="이미지미리보기"
        src={preview || placeholderImg}
      />
      <input
        className="FileInput-hidden-overlay"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <button className="FileInput-clear-button" onClick={handleClearClick}>
          <img src={resetImg} alt="선택해제" />
          {/* onClick이 없으면 이 태그가 form 태그 안에 있기에 submit 되어 버린다... */}
        </button>
      )}
    </div>
  );
}

export default FileInput;
