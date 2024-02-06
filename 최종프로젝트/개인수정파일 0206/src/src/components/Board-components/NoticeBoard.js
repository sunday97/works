import { useLocation } from "react-router-dom";
import Button from "../Button";
import styles from "./NoticeBoard.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  addReply,
  addReview,
  getBoardContentData,
  increment,
  updateView,
} from "../../api/firebase";
import RenderQuillContent from "./RenderQuillContent";

const RecommendBtn = styled(Button)`
  font-size: 16px;
  background-color: #1e326d;
  font-weight: bold;
  color: white;
  margin-right: 16px;
`;

const EditBtn = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #1e326d;
  border: none;
`;
const DeleteBtn = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #ff6666;
  border: none;
`;

function NoticeBoard({
  EditBoardList,
  accountName,
  setContent,
  content,
  deleteBoardList,
}) {
  // 리뷰를 작성할때 바뀌도록 하기 위한 state
  const [reviewInput, setReviewInput] = useState("");
  // 대댓글 작성하기 위한 state 추가
  const [replyInput, setReplyInput] = useState("");
  // 대댓글 버튼을 눌렀는지 확인하는 state
  const [replyBtnCheck, setReplyBtnCheck] = useState(false);
  // 어떤 댓글의 댓글달기를 클릭했는지 확인하는 state
  const [reviewBtnCheck, setReviewBtnCheck] = useState(null);

  // 글쓰기 api 태그로 저장되는 것을 일반 텍스트로 바꿔주기 위해서 담기
  const transformContent = content?.BOARD_CONTENT;

  // BoardList에서 state로 보내진 값 받음
  const temp = useLocation();
  // 받은 것에서 docId만 골라서 변수에 담음
  const tempData = temp?.state?.docId;

  // 리뷰를 작성
  const writeReviewClick = async (reviewId) => {
    try {
      if (reviewId === undefined) {
        await addReview("Board", content?.docId, reviewInput, accountName);
        setReviewInput("");
      } else {
        await addReply(
          "Board",
          content?.docId,
          reviewId,
          replyInput,
          accountName
        );
        setReplyInput("");
      }
      getBoardData();
    } catch (error) {
      console.error("Error writing review:", error);
    }
  };

  // 게시글 내용 가져오는거
  const getBoardData = async () => {
    try {
      const data = await getBoardContentData("Board", tempData);
      if (data) {
        setContent(data);
      } else {
        console.error("Document does not exist");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const buttonReplyClick = (uuid) => {
    setReviewBtnCheck(uuid);
    setReplyBtnCheck(true);
  };

  // 리뷰 입력할때 바뀌도록 하는
  const handleWriteReview = (e) => {
    setReviewInput(e.target.value);
  };

  // 대댓글 입력할때 바뀌도록 하는
  const handleWriteReplyInput = (e) => {
    setReplyInput(e.target.value);
  };

  // 대댓글 취소버튼 눌렀을때
  const handleCancelClick = () => {
    setReviewBtnCheck(null);
  };

  const recommendClick = async (text) => {
    let recommend;
    if (text == "추천") {
      recommend = await updateView("Board", content?.docId, {
        BOARD_VIEW: increment(1),
      });
    } else {
      recommend = await updateView("Board", content?.docId, {
        BOARD_VIEW: increment(-1),
      });
    }
    if (recommend === undefined) {
      getBoardData();
    }
  };
  // 클릭한 게시물마다 그 게시물의 데이터를 가져오게 하는 코드
  useEffect(() => {
    getBoardData();
  }, [tempData]);

  return (
    <>
      {/* 전체 부분 */}
      <div className={styles.containerWrap}>
        {/* 전체 안에 감싼 div */}
        <div className={styles.boxWrap}>
          {/* 상단 제목부분 div */}
          <div className={styles.headerWrap}>
            <h2>{content?.BOARD_TITLE}</h2>
            <div className={styles.boardInfoWrap}>
              <p>작성자: {content?.BOARD_NAME}</p>
              <div className={styles.boardInfo}>
                <p>추천: {content?.BOARD_UP}</p>
                <p>비추천: {content?.BOARD_DOWN}</p>
                <p>조회수: {content?.BOARD_VIEW}</p>
                <p>댓글: 0</p>
                <p>작성일: {content?.BOARD_TIME}</p>
              </div>
            </div>
          </div>

          {/* 게시판 내용 */}

          <div className={styles.boardContentWrap}>
            {/* 태그로 감싸진 텍스트 일반텍스트로 변환해주는 컴포넌트 */}
            <div className={styles.textImgWrap}>
              <RenderQuillContent htmlContent={transformContent} />
            </div>
            <div className={styles.buttonWrap}>
              <RecommendBtn
                size="small"
                $round
                onClick={() => recommendClick("추천")}
              >
                추천
              </RecommendBtn>
              <RecommendBtn
                size="small"
                $round
                onClick={() => recommendClick("비추천")}
              >
                비추천
              </RecommendBtn>
              <Button
                size="small"
                $round
                style={{ fontSize: "16px", fontWeight: "bold" }}
              >
                신고
              </Button>
            </div>
          </div>

          {/* 수정 삭제 버튼 */}
          {/* 게시글 작성자와 로그인한 사람의 이름이 같아야 수정 삭제 버튼이 생김 */}
          {accountName == content?.BOARD_NAME && (
            <div className={styles.EditDeleteBtnWrap}>
              <EditBtn
                size="small"
                round
                // 글쓰기 화면을 보여주기 위해서 Board페이지에서 함수 받음
                onClick={EditBoardList}
              >
                수정
              </EditBtn>
              <DeleteBtn size="small" round onClick={deleteBoardList}>
                삭제
              </DeleteBtn>
            </div>
          )}

          {/* 댓글 div */}
          <div className={styles.contentWrap}>
            <h2>댓글</h2>
            {/* 맵함수 댓글과 대댓글은 따로 컴포넌트로 만든다 */}
            {content?.BOARD_REVIEW?.map((reviewItem) => (
              <div className={styles.contents}>
                <div
                  key={reviewItem?.REVIEW_ID} // 추가: 각 항목에 고유한 key 부여
                  className={styles.content}
                >
                  {/* 한줄로 딱 space-between */}
                  <div className={styles.contentTitle}>
                    <p>{reviewItem?.REVIEW_USERNAME}</p>

                    <div className={styles.EditWrap}>
                      <p>수정</p>
                      <p>삭제</p>
                    </div>
                  </div>
                  <div className={styles.temp}>
                    <p>{reviewItem?.REVIEW_CONTENT}</p>
                    <div
                      onClick={() => buttonReplyClick(reviewItem?.REVIEW_ID)}
                    >
                      댓글달기
                    </div>
                  </div>

                  {/* 대댓글이 있는 경우에만 렌더링 */}
                  <div className={styles.reviewWrap}>
                    {reviewItem?.REVIEW_REPLY && (
                      <div className={styles.review}>
                        {/* 대댓글 입력란 */}
                        {/* 어떤 댓글의 댓글달기 버튼을 눌렀는지 확인  */}
                        {reviewBtnCheck == reviewItem?.REVIEW_ID && (
                          <div className={styles.replyInputWrap}>
                            <input
                              className={styles.replyInput}
                              type="text"
                              value={replyInput}
                              onChange={handleWriteReplyInput}
                              placeholder="대댓글을 입력하세요."
                            />

                            {/* 댓글과 대댓글 구분하기 위해서 댓글의 고유 ID보냄 */}
                            <div className={styles.replyBtnWrap}>
                              {replyInput.length === 0 ? (
                                <button
                                  disabled
                                  className={styles.replyNoWriteClick}
                                  onClick={() =>
                                    writeReviewClick(reviewItem?.REVIEW_ID)
                                  }
                                >
                                  답글
                                </button>
                              ) : (
                                <button
                                  className={styles.replyWriteClick}
                                  onClick={() =>
                                    writeReviewClick(reviewItem?.REVIEW_ID)
                                  }
                                >
                                  답글
                                </button>
                              )}

                              <div
                                onClick={handleCancelClick}
                                className={styles.replyCancelClick}
                              >
                                취소
                              </div>
                            </div>
                          </div>
                        )}

                        {reviewItem?.REVIEW_REPLY?.map((reply) => (
                          <div
                            className={`${styles.content}  ${styles.reply}`}
                            key={reply?.REPLY_ID}
                          >
                            <p className={styles.replyName}>
                              {reply?.REPLY_USERNAME}
                            </p>
                            <p className={styles.replyContent}>
                              {reply?.REPLY_CONTENT}
                            </p>
                            {/* 대댓글 삭제 버튼 */}
                            <button>Delete Reply</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* 댓글 작성란 */}
            <div className={styles.contentWrite}>
              <p className={styles.TextReview}>댓글작성</p>
              <div className={styles.nickName}>{accountName}</div>
              <input
                type="text"
                value={reviewInput}
                onChange={handleWriteReview}
                className={styles.input}
              />
            </div>
            <div className={styles.reviewButton}>
              {/* 댓글과 대댓글 구분하기 위해서 undefined를 보내 리뷰작성인 것을 알려주기 위함 */}
              <EditBtn onClick={() => writeReviewClick(undefined)} size="small">
                댓글 작성
              </EditBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoticeBoard;
