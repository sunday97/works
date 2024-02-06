import React, { useState } from 'react';
import styles from './Poket.module.css';
import { Link,  } from 'react-router-dom';

function Poket() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];

    setCheckboxStates(newCheckboxStates);
    updateSelectAllCheckbox(newCheckboxStates);
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    const newCheckboxStates = new Array(checkboxStates.length).fill(newSelectAll);

    setSelectAll(newSelectAll);
    setCheckboxStates(newCheckboxStates);
  };

  const updateSelectAllCheckbox = (checkboxStates) => {
    const allSelected = checkboxStates.every((state) => state);
    setSelectAll(allSelected);
  };

  
const handlePurchaseButtonClick = () => {
  // 여기에 구매 버튼을 눌렀을 때 실행할 로직 추가 가능

  // 특정 경로로 이동하면서 새로고침
  window.location.href = "/purchase";
  window.location.reload();
};

const onClick = ()=>{

  window.scrollTo(0,0)
}

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>장바구니</h1>
        </div>
        <div className={styles.order}>
          <div className={styles.cover}>
            <div className={styles.orderer}>
              <h1>장바구니</h1>
              <div className={styles.shop}>
                <p>상품정보</p>
              </div>
              <div className={styles.list}>
                <div className={styles.a}>
                  <div>
                    <h3>
                      모두선택 
                      <input type="checkbox" id="selectAllCheckbox" checked={selectAll} onChange={handleSelectAllChange} />
                    </h3>
                  </div>
                  <h3>상품정보</h3>
                  <h3>수량</h3>
                  <h3>상품구매금액</h3>
                </div>
                {[...Array(3)].map((_, index) => (
                  <div key={index} className={styles.b}>
                    <input
                      type="checkbox"
                      id={`checkbox${index}`}
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <div className={styles.bb}>
                      <div className={styles.bbb}>
                        <img alt={`상품 이미지 ${index + 1}`} />
                      </div>
                    </div>
                    <div className={styles.bbbname}>
                      <h3>상품이름</h3>
                    </div>
                    <div className={styles.bbbnumber}>
                      <h3>1</h3>
                    </div>
                    <div className={styles.bbbamount}>
                      <h3>30,000원</h3>
                    </div>
                  </div>
                ))}
                <div className={styles.bbutton}>
                  <Link to={"Purchase" }>
                  <button onClick={onClick}>구매하기</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poket;
