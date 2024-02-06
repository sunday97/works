import { useRef, useState } from "react";
import styles from "./BoardWriting.module.css";
import {
  addData,
  getStorage,
  serverTimestamp,
  updateData,
  uploadImage,
} from "../../api/firebase";
import Button from "../Button";
import styled from "styled-components";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BoardNavSelect from "./BoardNavSelect";

const WriteBtn = styled(Button)`
  background-color: #1e326d;
  color: #fff;
  font-size: 16px;
`;

const BoardButton = styled(Button)`
  opacity: 0;
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const BOARD = {
  // 공지사항 글 쓸수있으면 주석 풀기
  // 공지사항: "001",
  자유게시판: "002",
  운동팁: "003",
  도와주세요: "004",
  중고시장: "005",
};

function BoardWriting({
  setMainWriteClick,
  initialContent,
  initialTitle,
  accountName,
  editBtnClick,
  content,
}) {
  // 글쓰기 제목 state
  const [title, setTitle] = useState(initialTitle || "");
  // 어디에 글을 쓸건지 확인하는 state
  // 초기값은 자유게시판 공지사항에는 글을 못쓰니
  const [selectedFruit, setSelectedFruit] = useState("자유게시판");
  // 날짜 년월일 하기 위한 state
  const [date, setDate] = useState("");

  // 에디터(입력창)의 내용을 상태로 관리
  const [editor, setEditor] = useState(initialContent || "");
  // Quill 에디터의 참조를 만듦
  const quillRef = useRef(null);

  // 이미지 업로드를 처리하는 함수
  const handleImageUpload = async (file) => {
    try {
      // 이미지를 업로드하고 이미지 URL을 받아옴

      const imageUrl = await uploadImage(file);
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();

      // 에디터에 이미지 삽입
      editor.clipboard.dangerouslyPasteHTML(
        range.index,
        `<img src="${imageUrl}" alt="uploaded image" />`
      );
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
    }
  };

  // 어디에 글을 쓸건지 확인하는 함수
  const handleSelect = (fruit) => {
    // 리스트 열고 선택한 값 state에 저장
    setSelectedFruit(fruit);
  };

  // 에디터 내용이 변경될 때 호출되는 콜백
  const handleChange = (value) => {
    setEditor(value);
  };

  // 이미지 삽입 버튼 클릭 시 파일 선택 창 열기
  const handleInsertImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // 파일 선택 시 이미지 업로드 처리
    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        handleImageUpload(file, "추가");
      }
      // else {
      //   handleImageUpload(file, "삭제");
      // }
    };
  };
  // 이미지 삽입 버튼 끝 ---------------------------------

  // 글 작성 완료 버튼 클릭 시 호출되는 함수
  const handlePostComplete = async () => {
    if (editBtnClick) {
      const docRef = await updateData("Board", content?.docId, {
        BOARD_CODE: BOARD[`${selectedFruit}`],
        BOARD_TITLE: title,
        BOARD_CONTENT: editor,
        BOARD_TIME: date,
      });
      if (docRef === undefined) {
        alert("수정되었습니다.");
        // 글쓰기 버튼을 누른 후 메인으로 나가기 위해서 알려주기 위한 state
        // 렌더링 안됨
        setMainWriteClick(false);
      } else {
        // 문서 추가 실패
        console.error("문서 추가 실패");
        alert("문서 추가에 실패했습니다.");
      }
    } else {
      const docRef = await addData("Board", {
        BOARD_CODE: BOARD[`${selectedFruit}`],
        BOARD_TITLE: title,
        BOARD_NAME: accountName,
        BOARD_CONTENT: editor,
        BOARD_TIME: date,
        BOARD_UP: 0,
        BOARD_DOWN: 0,
        BOARD_VIEW: 0,
      });
      if (docRef) {
        alert("글작성 완료");
        // 글쓰기 버튼을 누른 후 메인으로 나가기 위해서 알려주기 위한 state
        setMainWriteClick(false);
      } else {
        // 문서 추가 실패
        console.error("문서 추가 실패");
        alert("문서 추가에 실패했습니다.");
      }
    }
  };

  // 입력한 제목 state담기
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const getDate = () => {
    // 현재 날짜를 생성
    const currentDate = new Date();

    // 년, 월, 일 정보 추출
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = currentDate.getDate();
    setDate(`${year}-${month < 10 ? "0" + month : month}-${day}`);
  };
  // console.log(date);
  useEffect(() => {
    getDate();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <p className={styles.Title}>제목</p>

          <div className={styles.selectInputWrap}>
            <BoardNavSelect
              handleSelect={handleSelect}
              selectedFruit={selectedFruit}
            />
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={handleInputChange}
              className={styles.inputTitle}
            />
          </div>

          {/* 글쓰기 api */}
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={editor}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          />

          <div className={styles.buttonWrap}>
            <div className={styles.fileButton}>
              파일첨부
              <BoardButton onClick={handleInsertImage} />
            </div>
            {/* <button onClick={handleImageUpload}>이미지 업로드</button> */}
            <WriteBtn size="small" round onClick={handlePostComplete}>
              글 쓰기
            </WriteBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardWriting;
