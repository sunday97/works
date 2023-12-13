import items from "../mock.json";
import ReviewList from "./ReviewList";

function App() {
  // console.log(items);

  const handleDelete = (id) => {
    alert(id);
  };
  return (
    <>
      <ReviewList items={items} onDelete={handleDelete} />
    </>
  );
}

export default App;
