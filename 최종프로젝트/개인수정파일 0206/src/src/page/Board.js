import BoardWriting from "../components/Board-components/BoardWriting";
import BoardBanner from "../components/Board-components/BoardBanner";
import BoardNav from "../components/Board-components/BoardNav";
import BoardFilter from "../components/Board-components/BoardFilter";
import BoardList from "../components/Board-components/BoardList";
import { useEffect, useRef, useState } from "react";
import NoticeBoard from "../components/Board-components/NoticeBoard";
import { deleteDatas } from "../api/firebase";

function Board() {
  // const selectedItemRef = useRef("000");
  const [selectedItem, setSelectedItem] = useState("000");
  // 메인 글쓰기버튼(false 기본)
  const [mainWriteclick, setMainWriteClick] = useState(false);
  // NoticeBoard에서 글수정버튼 확인(메인 글쓰기 버튼과 구분하기 위해서)
  const [editBtnClick, setEditBtnClick] = useState(false);
  // db내용 저장 state
  const [items, setItems] = useState([]);
  // 게시판 리스트를 클릭했을때 게시판 내용이 나오게 하는 state
  const [clickCheck, setClickCheck] = useState(false);
  // 위치값
  const [position, setPosition] = useState({ x: 0 });
  // 글쓴 내용 저장 state
  const [writeItems, setWriteItems] = useState("");
  // 글쓰기 해서 얻은 게시글 데이터 저장하기 위한 state
  const [content, setContent] = useState(null);

  // 계정 정보를 가지고 오기 위한 변수
  const account = JSON.parse(localStorage.getItem("Member"));
  const accountName = account[0].MEM_NAME;

  const handleMainWriteBtn = () => {
    setMainWriteClick(true);
  };

  // 수정버튼을 눌렀을때 게시글이 가지고 있는 값을 post로 받음
  const EditBoardList = (e) => {
    setEditBtnClick(true);
    // 클릭한 게시물을 수정 중인 상태로 설정
    // 글쓴 내용 저장
    setWriteItems(content);
    // 글쓰기 컴포넌트 보여주기 위한 렌더링
    setMainWriteClick(true);
    // 게시글 컴포넌트 사라지게 하기 위한 렌더링
    setClickCheck(false);
  };

  // 삭제하고 나서 렌더링 안되는 문제--------------------------------------------------
  const deleteBoardList = async () => {
    const deleteCheck = await deleteDatas("Board", content?.id, "BoardReview");
    if (deleteCheck === undefined) {
      alert("게시글이 삭제되었습니다.");
      // 수동으로 삭제한 항목 제거
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== content?.id)
      );
      // 삭제하고나서 게시판 리스트로 가게 하기위해서 state구분
      setClickCheck(false);
      // 삭제하고 나가서 렌더링이 안되서 삭제한게 그대로 보여짐 렌더링을 해야 사라짐 이거 해결해야함
    } else {
      alert("삭제 못함");
    }
  };

  return (
    <>
      <BoardBanner />
      {clickCheck && (
        <NoticeBoard
          EditBoardList={EditBoardList}
          accountName={accountName}
          setContent={setContent}
          content={content}
          deleteBoardList={deleteBoardList}
        />
      )}
      <BoardNav
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        mainWriteclick={mainWriteclick}
        setMainWriteClick={setMainWriteClick}
      />
      {mainWriteclick ? (
        <BoardWriting
          setMainWriteClick={setMainWriteClick}
          initialContent={writeItems ? writeItems?.BOARD_CONTENT : ""}
          initialTitle={writeItems ? writeItems?.BOARD_TITLE : ""}
          accountName={accountName}
          editBtnClick={editBtnClick}
          content={content}
        />
      ) : (
        <>
          <BoardFilter
            items={items}
            setItems={setItems}
            selectedItem={selectedItem}
          />
          <BoardList
            setClickCheck={setClickCheck}
            items={items}
            setPosition={setPosition}
            handleMainWriteBtn={handleMainWriteBtn}
            mainWriteclick={mainWriteclick}
            selectedItem={selectedItem}
          />
        </>
      )}

      {/* true면은 글쓰기 버튼 안보이게 */}
    </>
  );
}

export default Board;
