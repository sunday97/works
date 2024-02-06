import BoardWriting from "../components/Board-components/BoardWriting";
import BoardBanner from "../components/Board-components/BoardBanner";
import BoardNav from "../components/Board-components/BoardNav";
import BoardFilter from "../components/Board-components/BoardFilter";
import BoardList from "../components/Board-components/BoardList";
import { useEffect, useRef, useState } from "react";
import NoticeBoard from "../components/Board-components/NoticeBoard";
import { deleteDatas, getBoardContentData } from "../api/firebase";
import { useLocation } from "react-router-dom";

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
  // 글쓴 내용 저장 state
  const [writeItems, setWriteItems] = useState("");
  // 글쓰기 해서 얻은 게시글 데이터 저장하기 위한 state
  const [content, setContent] = useState(null);

  // 계정 정보를 가지고 오기 위한 변수
  const account = JSON.parse(localStorage.getItem("Member"));
  const accountName = account[0].MEM_NICKNAME;
  const accountDocId = account[0].MEM_docId;

  const handleMainWriteBtn = () => {
    setWriteItems("");
    setMainWriteClick(true);
  };

  return (
    <>
      <BoardBanner />
      {clickCheck && (
        <NoticeBoard
          accountName={accountName}
          setContent={setContent}
          content={content}
          setClickCheck={setClickCheck}
          setItems={setItems}
          setEditBtnClick={setEditBtnClick}
          setWriteItems={setWriteItems}
          setMainWriteClick={setMainWriteClick}
          accountDocId={accountDocId}
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
            handleMainWriteBtn={handleMainWriteBtn}
            mainWriteclick={mainWriteclick}
            selectedItem={selectedItem}
            // getBoardData={getBoardData}
          />
        </>
      )}

      {/* true면은 글쓰기 버튼 안보이게 */}
    </>
  );
}

export default Board;
