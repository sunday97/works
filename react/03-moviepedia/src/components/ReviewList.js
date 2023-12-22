import { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewFrom from "./ReviewFrom";
import LocaleContext from "../contexts/LocaleContext";

function formatDate(value) {
  const date = new Date(value);
  // console.log(date);
  return `${date.getFullYear()} . ${date.getMonth() + 1} . ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  // const locale = useContext(LocaleContext);
  // console.log(locale);

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
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.updatedAtAt}</p>
        <p>{item.content}</p>
        {/* <p>현재언어 : {locale}</p> */}
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
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
    <ul>
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
