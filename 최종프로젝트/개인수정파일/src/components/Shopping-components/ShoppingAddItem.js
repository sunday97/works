import { useEffect, useRef, useState } from "react";
import styles from "./ShoppingAddItem.module.css";
import ShoppingBanner from "./ShoppingBanner";
import xIcon from "../../assets/xmark-solid.svg";
import initialImg from "../../assets/dolly-solid.svg";

function ShoppingAddItem() {
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [preview4, setPreview4] = useState(null);
  const [forFile, setForFile] = useState(null);
  const [forFile2, setForFile2] = useState(null);
  const [forFile3, setForFile3] = useState(null);
  const [forFile4, setForFile4] = useState(null);
  const imgRef = useRef(null);
  const detailsImgRef = useRef(null);
  const detailsImgRef1 = useRef(null);
  const detailsImgRef2 = useRef(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(false);

  const handleChange = (e, set) => {
    // console.log(e.target.files[0]);
    console.log(e.target);
    // console.log(imgRef);
    set(e.target.files[0]);
  };

  useEffect(() => {
    if (!forFile) return;

    console.log(forFile);

    const nextPreview = URL.createObjectURL(forFile);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [forFile]);

  //   컨텐츠 1
  useEffect(() => {
    if (!forFile2) return;

    console.log(forFile2);

    const nextPreview = URL.createObjectURL(forFile2);
    setPreview2(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [forFile2]);

  //   컨텐츠 2
  useEffect(() => {
    if (!forFile3) return;

    console.log(forFile3);

    const nextPreview = URL.createObjectURL(forFile3);
    setPreview3(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [forFile3]);
  //   컨텐츠 3
  useEffect(() => {
    if (!forFile4) return;

    console.log(forFile4);

    const nextPreview = URL.createObjectURL(forFile4);
    setPreview4(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [forFile4]);

  const handleprevImgDelete = (set) => {
    set(null);
  };

  //   등록하기
  const handleSubmit = () => {
    const obj = {
      STORE_NAME: title,
      STORE_PRICE: price,
      STORE_STOCK: stock,
      STORE_IMAGE: "fd",
    };
    console.log(obj);
  };

  return (
    <>
      <ShoppingBanner
        title={`물품추가`}
        summary={`이곳에선 물품을 추가합니다.`}
      />
      <div className={styles.container}>
        <div className={styles.headBox}>
          {/* 이미지추가 */}
          <div className={styles.imgBox}>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e, setForFile);
              }}
              ref={imgRef}
              className={styles.hiddenInput}
            />
            <div className={styles.previewWrap}>
              <img
                src={preview || initialImg}
                alt="미리보기"
                className={styles.preview}
              />
            </div>
            <img
              src={xIcon}
              className={styles.imgX}
              onClick={() => handleprevImgDelete(setPreview)}
            />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoBar}>
              <p>제품명 : </p>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className={styles.infoBar}>
              <p>가격 : </p>
              <input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className={styles.infoBar}>
              <p>재고상태 : </p>
              <div className={styles.stockBtns}>
                <label className={styles.stockBtnWrap}>
                  판매가능
                  <input
                    className={styles.stockBtn}
                    name="stock"
                    type="radio"
                    checked={stock}
                    onClick={() => {
                      setStock(true);
                    }}
                  />
                </label>
                <label className={styles.stockBtnWrap}>
                  품절
                  <input
                    className={styles.stockBtn}
                    name="stock"
                    type="radio"
                    checked={!stock}
                    onClick={() => {
                      setStock(false);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBox}>
          <p className={styles.contentDescription}>상세보기</p>
          {/* 컨텐츠 1 */}
          <div className={styles.content}>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e, setForFile2);
              }}
              ref={detailsImgRef}
              className={styles.hiddenInput}
            />
            <div className={styles.previewWrap}>
              <img
                src={preview2 || initialImg}
                alt="미리보기"
                className={styles.preview}
              />
            </div>
            <img
              src={xIcon}
              className={styles.imgX}
              onClick={() => handleprevImgDelete(setPreview2)}
            />
          </div>
          {/* 컨텐츠 2 */}
          {preview2 !== null ? (
            <div className={styles.content}>
              <input
                type="file"
                onChange={(e) => {
                  handleChange(e, setForFile3);
                }}
                ref={detailsImgRef2}
                className={styles.hiddenInput}
              />
              <div className={styles.previewWrap}>
                <img
                  src={preview3 || initialImg}
                  alt="미리보기"
                  className={styles.preview}
                />
              </div>
              <img
                src={xIcon}
                className={styles.imgX}
                onClick={() => handleprevImgDelete(setPreview2)}
              />
            </div>
          ) : (
            ""
          )}

          {/* 컨텐츠 3 */}
          {preview4 !== null ? (
            <div className={styles.content}>
              <input
                type="file"
                onChange={(e) => {
                  handleChange(e, setForFile4);
                }}
                ref={detailsImgRef}
                className={styles.hiddenInput}
              />
              <div className={styles.previewWrap}>
                <img
                  src={preview4 || initialImg}
                  alt="미리보기"
                  className={styles.preview}
                />
              </div>
              <img
                src={xIcon}
                className={styles.imgX}
                onClick={() => handleprevImgDelete(setPreview2)}
              />
            </div>
          ) : (
            ""
          )}
          {/* 종료 */}
          <div
            className={styles.submit}
            onClick={() => {
              handleSubmit();
            }}
          >
            등록하기
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingAddItem;

// 나중에 중복코드를 줄이자
// import { useEffect, useRef, useState } from "react";
// import styles from "./ShoppingAddItem.module.css";
// import ShoppingBanner from "./ShoppingBanner";
// import xIcon from "../../assets/xmark-solid.svg";
// import initialImg from "../../assets/dolly-solid.svg";

// function ShoppingAddItem() {
//   const [inputs, setInputs] = useState([
//     { preview: null, forFile: null, ref: useRef(null) },
//     { preview: null, forFile: null, ref: useRef(null) },
//     { preview: null, forFile: null, ref: useRef(null) },
//   ]);

//   const handleChange = (e, index) => {
//     const newInputs = [...inputs];
//     newInputs[index].forFile = e.target.files[0];
//     setInputs(newInputs);
//   };

//   const handlePrevImgDelete = (index) => {
//     const newInputs = [...inputs];
//     newInputs[index].forFile = null;
//     setInputs(newInputs);
//   };

//   useEffect(() => {
//     inputs.forEach((input, index) => {
//       if (input.forFile) {
//         const nextPreview = URL.createObjectURL(input.forFile);
//         input.preview = nextPreview;

//         return () => {
//           URL.revokeObjectURL(nextPreview);
//         };
//       }
//     });
//   }, [inputs]);

//   return (
//     <>
//       <ShoppingBanner title={`물품추가`} summary={`이곳에선 물품을 추가합니다.`} />
//       <div className={styles.container}>
//         <div className={styles.headBox}>
//           {/* 이미지추가 */}
//           {inputs.map((input, index) => (
//             <div key={index} className={styles.imgBox}>
//               <input
//                 type="file"
//                 onChange={(e) => handleChange(e, index)}
//                 ref={input.ref}
//                 className={styles.hiddenInput}
//               />
//               <div className={styles.previewWrap}>
//                 <img
//                   src={input.preview || initialImg}
//                   alt="미리보기"
//                   className={styles.preview}
//                 />
//               </div>
//               <img
//                 src={xIcon}
//                 className={styles.imgX}
//                 onClick={() => handlePrevImgDelete(index)}
//               />
//             </div>
//           ))}
//           {/* 나머지 코드 생략 */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ShoppingAddItem;
