import styles from "./shopping.module.css";
import { useEffect, useState } from "react";
import ShoppingBanner from "./../components/Shopping-components/ShoppingBanner";
import originItems from "../shoppingMock.json";
import exImg from "../assets/닭가슴살.png";
import { Link } from "react-router-dom";

let tempArr = [];
const seeShoppingRoot = [
  {
    "000": "전체보기",
    "001": "장비",
    "000": "의류",
    "000": "식품",
    "000": "기타",
  },
  { rating: "평점순", sales: "판매순" },
];

function Shopping() {
  const [selectedNavItem, setSelectedNavItem] = useState("000");
  const [itemSort, setItemSort] = useState("rating");
  const [items, setItems] = useState([]);
  const [sreachValue, setSearchValue] = useState("");

  // console.log(sreachValue);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // 카테고리별 정렬
  useEffect(() => {
    const temp = {
      "001": "장비",
      "002": "의류",
      "003": "식품",
      "004": "기타",
    };

    if (selectedNavItem === "000") {
      setItems(originItems);
      tempArr = originItems;
      setItemSort("rating");
      setCurrentPage(1);
    } else {
      setItems(originItems.filter((el) => el.type === temp[selectedNavItem]));
      tempArr = originItems.filter((el) => el.type === temp[selectedNavItem]);
      setItemSort("rating");
      setCurrentPage(1);
    }
  }, [selectedNavItem]);

  const NavClick = (value) => {
    setSelectedNavItem(value);
    setSearchValue("");
  };
  const sortHandleCkick = (value) => {
    setItemSort(value);
  };

  const handleSearch = () => {
    setItems(
      tempArr.filter((el) =>
        el.name.toLowerCase().includes(sreachValue.toLowerCase())
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("누름");
      handleSearch();
    }
  };

  useEffect(() => {
    setItems((prevItems) => {
      // 여기서 slice()는 이유는 이전값을 직접 수정하지 않기 위해서이다.
      return prevItems.slice().sort((a, b) => {
        return b[itemSort] - a[itemSort];
      });
    });
  }, [itemSort]);

  // console.log(items);

  // 페이지네이션부분
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // 현재 페이지에 해당하는 아이템 추출
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 관리자 확인
  const isAdmin = JSON.parse(localStorage.getItem("abc"));
  // console.log(isAdmin.name);

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <>
      {/* 베너 */}
      <ShoppingBanner title={`쇼핑`} summary={`필요한 제품을 찾아보세요!`} />
      <div className={styles.container}>
        {/* nav */}
        <ul className={styles.shoppingNav}>
          <li
            className={
              selectedNavItem == "000"
                ? `${styles.navItem} ${styles.selectedNav}`
                : styles.navItem
            }
            onClick={() => {
              NavClick("000");
            }}
          >
            전체보기
          </li>
          <li
            className={
              selectedNavItem == "001"
                ? `${styles.navItem} ${styles.selectedNav}`
                : styles.navItem
            }
            onClick={() => {
              NavClick("001");
            }}
          >
            장비
          </li>
          <li
            className={
              selectedNavItem == "002"
                ? `${styles.navItem} ${styles.selectedNav}`
                : styles.navItem
            }
            onClick={() => {
              NavClick("002");
            }}
          >
            의류
          </li>
          <li
            className={
              selectedNavItem == "003"
                ? `${styles.navItem} ${styles.selectedNav}`
                : styles.navItem
            }
            onClick={() => {
              NavClick("003");
            }}
          >
            식품
          </li>
          <li
            className={
              selectedNavItem == "004"
                ? `${styles.navItem} ${styles.selectedNav}`
                : styles.navItem
            }
            onClick={() => {
              NavClick("004");
            }}
          >
            기타
          </li>
        </ul>
        {/* ShoppingListSearchbar */}
        <div className={styles.itemSearchAndsort}>
          <div className={styles.sorts}>
            <div
              className={
                itemSort == "rating"
                  ? `${styles.sortBtn} ${styles.selectedSortBtn} `
                  : styles.sortBtn
              }
              onClick={() => {
                sortHandleCkick("rating");
              }}
            >
              평점순
            </div>
            <div
              className={
                itemSort === "sales"
                  ? `${styles.sortBtn} ${styles.selectedSortBtn} `
                  : styles.sortBtn
              }
              onClick={() => {
                sortHandleCkick("sales");
              }}
            >
              판매순
            </div>
            {isAdmin?.name === "isAdmin" ? (
              <Link to={"addItem"}>
                <div className={`${styles.itemAdd} `}>물품추가</div>
              </Link>
            ) : (
              ""
            )}
          </div>
          {/* <input type="file" value={undefined} onClick={handleChange} /> */}

          <div className={styles.itemSearchBar}>
            <input
              className={styles.itemSearchInput}
              onChange={handleInputChange}
              onKeyUp={(e) => handleKeyPress(e)}
              value={sreachValue}
            />
            <div className={styles.sortBtn} onClick={handleSearch}>
              검색
            </div>
          </div>
        </div>
        <p className={styles.shoppingRoot}>
          스토어 &gt; {seeShoppingRoot[0][selectedNavItem]} &gt;{" "}
          {seeShoppingRoot[1][itemSort]}
        </p>
        {/* ShoppingListSearch */}
        <div className={styles.items}>
          {currentItems.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.imgWrapper}>
                <img
                  src={
                    item.image ==
                    "https://sitem.ssgcdn.com/20/47/09/item/1000338094720_i1_750.jpg"
                      ? item.image
                      : exImg
                  }
                  alt="상품사진"
                />
              </div>
              <p className={styles.itemTitle}>
                <Link
                  to={`/shopping/${item.id}`}
                  state={item}
                  className={styles.itemTitleLink}
                >
                  {item.name}
                </Link>
              </p>
              <div className={styles.Summary}>
                <p className={styles.itemPrice}>
                  {item.price.toLocaleString()}원
                </p>
                <p className={styles.rating}>
                  <span
                    style={{
                      color: "yellow",
                      WebkitTextStroke: "1px #666",
                      fontSize: "20px",
                    }}
                  >
                    ★
                  </span>
                  {item.rating}
                </p>
                {/* <p>{item.sales}</p> */}
              </div>
            </div>
          ))}
        </div>
        {/* 페이지네이션 컴포넌트 */}
        <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={
                  index + 1 === currentPage
                    ? `${styles.paginationBtn} ${styles.paginationBtnActive}`
                    : `${styles.paginationBtn} `
                }
              >
                {index + 1}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Shopping;
