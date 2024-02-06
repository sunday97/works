// 신고 컴포넌트
import { useEffect, useRef, useState } from "react";
import styles from "./Report.module.css";
import Button from "./Button";
import styled from "styled-components";
import { addData } from "../api/firebase";

const ReportBtn = styled(Button)`
  font-size: 20px;
  &:hover {
    color: blue;
    font-weight: bold;
  }
`;

const CancelBtn = styled(Button)`
  font-size: 20px;
  &:hover {
    color: red;
    font-weight: bold;
  }
`;

const REPORTS = [
  "비방/욕설",
  "부적절한 콘텐츠",
  "사용자 행동 위반",
  "개인 정보 침해",
  "저작권 위반",
];

function Report({ accountName, setClickCheck }) {
  // 신고 종류 열기
  const [isOpen, setIsOpen] = useState(false);
  // 신고 종류 버튼 클릭
  const [reportCheck, setReportCheck] = useState("");
  //  신고하기 버튼 클릭
  const [reportInput, setReportInput] = useState("");

  //   const inputFileRef = useRef(null);

  //   const handleFileInputClick = () => {
  //     inputFileRef.current.click();
  //   };

  //   const handleFileChange = (e) => {
  //     const selectedFile = e.target.files[0];
  //     console.log("Selected File:", selectedFile);
  //     // 여기에서 파일 처리 로직을 추가할 수 있습니다.
  //   };

  const handleButtonClick = (e) => {
    // 버블링 막는 위로가는 함수 막는거
    e.stopPropagation();
    // 리스트 버튼 클릭시 리스트 열림
    setIsOpen(!isOpen);
  };

  //   신고 종류 선택
  const handleReportClick = (report) => {
    setReportCheck(report);
  };

  const handleContentChange = (e) => {
    setReportInput(e.target.value);
  };

  //   신고하기 버튼
  const handleReport = async () => {
    const report = await addData("Report", {
      REPORT_NAME: accountName,
      REPORT_CONTENT: reportInput,
      REPORT_CATEGORY: reportCheck,
      //   신고내용에 더 들어갈거 추가
      // REPORT_IMAGE: ,
    });
    console.log(report);
    if (report) {
      alert("신고가 접수되었습니다.");
      setClickCheck(false);
    }
  };

  useEffect(() => {
    // 리스트가 열려있으면 빠져나감
    if (!isOpen) return;
    // 버튼 외의 영역 누를때 닫히는 함수
    const handleClickOutside = () => setIsOpen(false);

    // window화면 클릭하면 닫히는 함수 실행
    window.addEventListener("click", handleClickOutside);

    // cleanUp함수
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* 신고 모달 */}
      <div className={styles.reportContainer}>
        {/* 신고 내용 전체 */}
        <div className={styles.reportWrap}>
          {/* 신고 배경 하얀색 */}
          <div className={styles.reportBox}>
            {/* 신고 입력값 가운데 정렬 */}
            <div className={styles.report}>
              {/* 상단 신고합니다 이름 */}
              <div className={styles.reportTitle}>
                <h2>신고합니다</h2>
                <p>신고자 : {accountName}</p>
                {/* 처리하기는 관리자만 보이게 */}
                {/* <button>처리하기</button> */}
              </div>
              <div className={styles.inputFileWrap}>
                {/* 스크린샷 */}
                <input type="file" />
              </div>
              {/* 전체 감싸준 div */}
              <div className={styles.dropdownContainer}>
                {/* 처음에 보여주는 버튼? 칸? */}
                <div
                  className={styles.dropdownMain}
                  onClick={handleButtonClick}
                >
                  {reportCheck || "비방/욕설"}
                </div>
                {/* div를 클릭했다면 아래 코드 실행 */}
                {isOpen && (
                  //   게시판 목록 어디에 쓸건지 나오는 리스트
                  <div className={styles.dropdownList}>
                    {/* 맨위에서 정한 목록 배열을 map으로 풀어서 나열 */}
                    {REPORTS.map((report, index) => (
                      <div
                        onClick={() => handleReportClick(report)}
                        key={index}
                        className={styles.option}
                      >
                        {report}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* 신고 내용 */}
              <div>
                <input
                  className={styles.reportContent}
                  type="text"
                  onChange={handleContentChange}
                  value={reportInput}
                />
              </div>
              {/* 확인 취소 버튼 */}
              <div className={styles.reportBtnWrap}>
                <div>
                  <ReportBtn onClick={handleReport}>신고</ReportBtn>
                </div>
                <div>
                  <CancelBtn>취소</CancelBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
