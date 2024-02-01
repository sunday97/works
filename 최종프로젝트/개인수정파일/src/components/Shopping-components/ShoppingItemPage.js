import { useLocation } from "react-router-dom";

function ShoppingItemPage() {
  const props = useLocation();
  console.log(props);
  return <>얍</>;
}

export default ShoppingItemPage;
