import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  // console.log(date);
  return `${date.getFullYear()} . ${date.getMonth() + 1} . ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  // console.log(onDelete);
  // const handleDeleteClick = function () {
  //   onDelete(item.id);
  // };
  // function test() {
  //   alert("test");
  // }
  const handleDeleteClick = () => onDelete(item.id);
  // console.log(handleDeleteClick);
  // console.log(onDelete(item.id));
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.updatedAtAt}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  // console.log(onDelete);
  // console.log(items);
  return (
    <ul>
      {/* {[<li>tttt</li>]} */}
      {items.map((item) => {
        return (
          // key={item.id}를 넣는 이유는 리액트가 어떤 부분을 수정했는지 알려주는 요소다.
          // Warning: Each child in a list should have a unique "key" prop.
          // 반복하는 element 중에 root element에 key를 넣어준다.
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
            <input type="txet" />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
