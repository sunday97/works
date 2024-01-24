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
import BoardItemAll from "./components/Board-components/Board-Item-All";
import BoardItemFree from "./components/Board-components/Board-Item-Free";
import BoardItemTip from "./components/Board-components/Board-Item-Tip";
import BoardItemHelp from "./components/Board-components/Board-Item-Help";
import BoardItemUsed from "./components/Board-components/Board-Item-Used";
import BuddyFindMap from "./components/BuddyFind-components/BuddyFindMap";
import BuddyFindSet from "./components/BuddyFind-components/BuddyFindSet";
import Temp from "./components/Temp";
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
          <Route path="board" element={<Board />}>
            <Route index element={<BoardItemAll />} />
            <Route path="boardItemFree" element={<BoardItemFree />} />
            <Route path="boardItemTip" element={<BoardItemTip />} />
            <Route path="boardItemHelp" element={<BoardItemHelp />} />
            <Route path="boardItemUsed" element={<BoardItemUsed />} />
          </Route>
          <Route path="Login">
            <Route index element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
          </Route>
          <Route path="mypage" element={<MyPage />}></Route>
          {/* 임시작업페이지 */}
          <Route path="temp" element={<Temp />} />
        </Route>
        <Route path="chatting" element={<Chatting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
