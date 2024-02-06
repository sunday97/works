import styled from "styled-components";
import Button from "../Button";
import styles from "./BoardFilter.module.css";
import { getBoardData } from "../../api/firebase";
import { useEffect, useRef, useState } from "react";

const SelectButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.location == "최신순" ? "#ffffff" : "black")};
  background-color: ${(props) =>
    props.location == "최신순" ? "#1e326d" : "#ffffff"};
  border-radius: 9999px;
  border: 1px solid
    ${(props) => (props.location == "최신순" ? "#ffffff" : "black")};
`;

const NoSelectButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  border-radius: 9999px;
  color: ${(props) => (props.location == "최신순" ? "black" : "#ffffff")};
  border: 1px solid
    ${(props) => (props.location == "최신순" ? "black" : "#ffffff")};
  background-color: ${(props) =>
    props.location == "최신순" ? "#ffffff" : "#1e326d"};
`;

const SearchButton = styled(Button)`
  border-radius: 9999px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #1e326d;
  color: white;
`;
// 필터랑 검색
function BoardFilter({ items, setItems, selectedItem }) {
  // 버튼 클릭한 값 state
  const [location, setLocation] = useState("최신순");
  const recentRef = useRef();
  const checkRef = useRef();
  // 검색어 입력란 ref 추가
  const searchRef = useRef();
  const recentBtnClick = async () => {
    const rBtnRef = recentRef.current.textContent;
    setLocation(rBtnRef);

    const conditionalData = await getBoardData(
      "Board",
      selectedItem,
      "BOARD_TIME"
    );

    setItems(conditionalData);
  };
  const checkBtnClick = async () => {
    const cBtnRef = checkRef.current.textContent;
    console.log(cBtnRef);
    setLocation(cBtnRef);
    const conditionalData = await getBoardData(
      "Board",
      selectedItem,
      "BOARD_VIEW"
    );

    setItems(conditionalData);
  };

  const searchBtnClick = () => {
    const searchKeyword = searchRef.current.value;
    // 검색어를 이용하여 게시물 필터링
    const searchItems = items.filter(({ BOARD_TITLE }) =>
      BOARD_TITLE.includes(searchKeyword)
    );
    setItems(searchItems);
  };

  useEffect(() => {
    if (recentRef) {
      recentBtnClick();
    } else if (checkRef) {
      checkBtnClick();
    }
  }, [selectedItem]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.filter}>
            <SelectButton
              location={location}
              ref={recentRef}
              onClick={recentBtnClick}
              size="small"
            >
              최신순
            </SelectButton>
            <NoSelectButton
              location={location}
              ref={checkRef}
              onClick={checkBtnClick}
              size="small"
            >
              조회순
            </NoSelectButton>
          </div>
          <div className={styles.search}>
            <input ref={searchRef} type="text" className={styles.input} />
            <SearchButton onClick={searchBtnClick} size="small">
              검색
            </SearchButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardFilter;
