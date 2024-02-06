import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "./Main.css";
import BuddyFind from "./page/BuddyFind";
import Body from "./components/Body";
import Chatting from "./page/Chatting";
import Introduction from "./page/Introduction";
import Shopping from "./page/Shopping";
import ShoppingItemAll from "./components/Shopping-components/Shopping-Item-All";
import ShoppingItemClothes from "./components/Shopping-components/Shopping-Item-Clothes";
import ShoppingItemEct from "./components/Shopping-components/Shopping-Item-Ect";
import ShoppingItemEquipment from "./components/Shopping-components/Shopping-Item-Equipment";
import ShoppingItemFood from "./components/Shopping-components/Shopping-Item-Food";
import Board from "./page/Board";
import BuddyFindMap from "./components/BuddyFind-components/BuddyFindMap";
import BuddyFindSet from "./components/BuddyFind-components/BuddyFindSet";
// import BoardItem from "./components/Board-components/Board-Item";
import BoardWriting from "./components/Board-components/BoardWriting";
// import BoardNotification from "./components/Board-components/BoardNotification";
import NoticeBoard from "./components/Board-components/NoticeBoard";
import Agree from "./components/Agree";
import FindemailPw from "./components/FindemailPw";
import LoginMain from "./components/LoginMain";
import MyPage from "./page/MyPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Body />}></Route>
          <Route path="BuddyFind" element={<BuddyFind />}>
            <Route index element={<BuddyFindMap />} />
            <Route path="buddyMy" element={<BuddyFindSet />} />
          </Route>
          <Route path="intro" element={<Introduction />} />
          <Route path="shopping" element={<Shopping />}>
            <Route index element={<ShoppingItemAll />} />
            <Route
              path="ShoppingItemEquipment"
              element={<ShoppingItemEquipment />}
            />
            <Route
              path="shoppingItemClothes"
              element={<ShoppingItemClothes />}
            />
            <Route path="shoppingItemFood" element={<ShoppingItemFood />} />
            <Route path="shoppingItemEct" element={<ShoppingItemEct />} />
          </Route>
          <Route path="board">
            <Route index element={<Board />} />
            <Route path="writing" element={<BoardWriting />} />
            <Route path="noticeBoard" element={<NoticeBoard />} />
          </Route>
          <Route path="Login">
            <Route index element={<LoginMain />} />
            <Route path="findempw" element={<FindemailPw />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Agree">
              <Route index element={<Agree />} />
            </Route>
          </Route>
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path="chatting" element={<Chatting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
