import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("member");

  // Navigate태그 : 리턴할 게 없고(렌더링할 게 없고) 페이지를 이동할 때 사용
  return <Navigate to="/" />;
}

export default Logout;
