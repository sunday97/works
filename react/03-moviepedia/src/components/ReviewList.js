import { useState } from "react";
import "./ReviewList.css";
import ReviewFrom from "./ReviewFrom";
import { useLocale } from "../contexts/LocaleContext";
import { useTrnaslate } from "../hooks/useTranslate";
import Rating from "./Rating";

function formatDate(value) {
  const date = new Date(value);
  // console.log(date);
  return `${date.getFullYear()} . ${date.getMonth() + 1} . ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  // const locale = useContext(LocaleContext);  // Context훅을 사용하려면 먼저 이걸 작성하고 해야한다. 각 컴포마다.
  // console.log(locale);
  // const locale = useLocale();
  const t = useTrnaslate();

  // console.log(onDelete);
  // const handleDeleteClick = function () {
  //   onDelete(item.id);
  // };
  // function test() {
  //   alert("test");
  // }
  const handleDeleteClick = () => onDelete(item.docId, item.imgUrl);
  // console.log(handleDeleteClick);
  // console.log(onDelete(item.id));
  const handleEditClick = () => {
    onEdit(item.id);
  };
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div className="ReviewListItem-rows">
        <h1 className="ReviewListItem-title">{item.title}</h1>
        <Rating className="ReviewListItem-rating" hoverRating={item.rating} />
        <p className="ReviewListItem-date">{formatDate(item.createdAt)}</p>
        {/* <p>{item.updatedAtAt}</p> */}
        <p className="ReviewListItem-content">{item.content}</p>
        {/* <p>현재언어 : {locale}</p> */}
        <div className="ReveiwListItem-buttons">
          <button
            className="ReviewListItem-edit-button"
            onClick={handleEditClick}
          >
            {t("edit button")}
          </button>
          <button
            className="ReviewListItem-delete-button"
            onClick={handleDeleteClick}
          >
            {t("delete button")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  // console.log(onDelete);
  // console.log(items);
  const [editingID, setEditingId] = useState(null);
  // console.log(editingID); // id 획득!
  return (
    <ul className="ReviewList">
      {/* {[<li>tttt</li>]} */}
      {items.map((item) => {
        // console.log(item);
        if (item.id === editingID) {
          const { title, rating, content, imgUrl, docId } = item;
          const initialValues = { title, rating, content, imgUrl: null };
          // console.log(initialValues);

          const handleSubmit = (collectionName, formData) => {
            const result = onUpdate(collectionName, formData, docId, imgUrl);
            if (result === null) {
              alert("리뷰를 수정할 수 없습니다. 관리자에게 문의하세요.");
              return;
            } else {
              return result;
            }
          };

          const handleCancel = () => setEditingId(null);

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };
          return (
            <li key={item.id}>
              <ReviewFrom
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onsbumit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }

        return (
          // key={item.id}를 넣는 이유는 리액트가 어떤 부분을 수정했는지 알려주는 요소다.
          // Warning: Each child in a list should have a unique "key" prop.
          // 반복하는 element 중에 root element에 key를 넣어준다.
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onEdit={setEditingId}
              onDelete={onDelete}
            />
            {/* <input type="txet" /> */}
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
